import {NgModule} from "@angular/core";
import {Http} from '@angular/http';
import {MasterDetailsPageModule} from './master-details.module';

@NgModule()
export class MasterDetailsService {
  constructor(public http: Http) {
  }

  getData(url, param): Promise<MasterDetailsPageModule> {
    return this.http.get(url, param)
      .toPromise()
      .then(response => response.json()  as MasterDetailsPageModule)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
