import {NgModule} from "@angular/core";
import {Http} from '@angular/http';
import {OrderDetailPageModule} from './order-detail.module';

@NgModule()
export class OrderDetailService {
  constructor(public http: Http) {
  }

  getData(url, param): Promise<OrderDetailPageModule> {
    return this.http.get(url, param)
      .toPromise()
      .then(response => response.json()  as OrderDetailPageModule)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
