import {NgModule} from "@angular/core";
import {Http} from '@angular/http';
import {MakeResultPageModule} from './make-result.module';

@NgModule()
export class MakeResultService {
  constructor(public http: Http) {
  }

  getData(url, param): Promise<MakeResultPageModule> {
    return this.http.get(url, param)
      .toPromise()
      .then(response => response.json()  as MakeResultPageModule)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
