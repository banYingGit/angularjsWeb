import {NgModule} from "@angular/core";
import {Http} from '@angular/http';
import {GoodsEvaluatePageModule} from './goods-evaluate.module';

@NgModule()
export class GoodsEvaluateService {
  constructor(public http: Http) {
  }

  getData(url, param): Promise<GoodsEvaluatePageModule> {
    return this.http.get(url, param)
      .toPromise()
      .then(response => response.json()  as GoodsEvaluatePageModule)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
