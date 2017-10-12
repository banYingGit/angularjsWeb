import {NgModule} from "@angular/core";
import {Http} from '@angular/http';
import {CarPageModule} from './car.module';

@NgModule()
export class CarService {
  constructor(public http: Http) {
  }

  getData(url, param): Promise<CarPageModule> {
    return this.http.get(url, param)
      .toPromise()
      .then(response => response.json()  as CarPageModule)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
