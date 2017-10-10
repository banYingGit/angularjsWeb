import {NgModule} from "@angular/core";
import {Http} from '@angular/http';
import {GoodsDetailsPageModule} from './goods-details.module';

@NgModule()
export class GoodsDetailsService {
  constructor(public http: Http) {
  }

  getData(url, param): Promise<GoodsDetailsPageModule> {
    return this.http.get(url, param)
      .toPromise()
      .then(response => response.json()  as GoodsDetailsPageModule)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
