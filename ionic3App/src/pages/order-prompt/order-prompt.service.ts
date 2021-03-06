import {NgModule} from "@angular/core";
import {Http} from '@angular/http';
import {OrderPromptPageModule} from './order-prompt.module';

@NgModule()
export class OrderPromptService {
  constructor(public http: Http) {
  }

  getData(url, param): Promise<OrderPromptPageModule> {
    return this.http.get(url, param)
      .toPromise()
      .then(response => response.json()  as OrderPromptPageModule)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
