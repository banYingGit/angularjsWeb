import {NgModule} from "@angular/core";
import {Http} from '@angular/http';
import {IndexPageModule} from './index.module';

@NgModule()
export class IndexService {
  constructor(public http: Http) {
  }

  getData(url): Promise<IndexPageModule> {
    return this.http.get(url)
      .toPromise()
      .then(response => response.json()  as IndexPageModule )
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
