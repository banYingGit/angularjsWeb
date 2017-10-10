import {NgModule} from "@angular/core";
import {Http} from '@angular/http';
import {MarketMakePageModule} from './market-make.module';

@NgModule()
export class MarketMakeService {
  constructor(public http: Http) {
  }

  getData(url, param): Promise<MarketMakePageModule> {
    return this.http.get(url, param)
      .toPromise()
      .then(response => response.json()  as MarketMakePageModule)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
