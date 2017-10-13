import {NgModule} from "@angular/core";
import {Http} from '@angular/http';
import {AddressChoosePageModule} from './address-choose.module';

@NgModule()
export class AddressChooseService {
  constructor(public http: Http) {
  }

  getData(url, param): Promise<AddressChoosePageModule> {
    return this.http.get(url, param)
      .toPromise()
      .then(response => response.json()  as AddressChoosePageModule)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
