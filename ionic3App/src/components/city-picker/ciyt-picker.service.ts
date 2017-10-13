import {NgModule} from "@angular/core";
import {Http} from '@angular/http';
import {CityPickerModule} from './coity-picker.module';

@NgModule()
export class CityPickerService {
  constructor(public http: Http) {
  }

  getData(url, param): Promise<CityPickerModule> {
    return this.http.get(url, param)
      .toPromise()
      .then(response => response.json()  as CityPickerModule)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
