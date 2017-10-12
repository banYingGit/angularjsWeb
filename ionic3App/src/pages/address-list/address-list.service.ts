import {NgModule} from "@angular/core";
import {Http} from '@angular/http';
import {AddressListPageModule} from './address-list.module';

@NgModule()
export class AddressListService {
  constructor(public http: Http) {
  }

  getData(url, param): Promise<AddressListPageModule> {
    return this.http.get(url, param)
      .toPromise()
      .then(response => response.json()  as AddressListPageModule)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
