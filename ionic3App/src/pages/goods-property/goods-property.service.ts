import {NgModule} from "@angular/core";
import {Http} from '@angular/http';
import {GoodsPropertyPageModule} from './goods-property.module';

@NgModule()
export class GoodsPropertyService {
  constructor(public http: Http) {
  }

  getData(url, param): Promise<GoodsPropertyPageModule> {
    return this.http.get(url, param)
      .toPromise()
      .then(response => response.json()  as GoodsPropertyPageModule)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
