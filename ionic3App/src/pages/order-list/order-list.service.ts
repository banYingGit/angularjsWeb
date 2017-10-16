import {NgModule} from "@angular/core";
import {Http} from '@angular/http';
import {OrderListPageModule} from './order-list.module';

@NgModule()
export class OrderListService {
  constructor(public http: Http) {
  }

  getData(url, param): Promise<OrderListPageModule> {
    return this.http.get(url, param)
      .toPromise()
      .then(response => response.json()  as OrderListPageModule)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
