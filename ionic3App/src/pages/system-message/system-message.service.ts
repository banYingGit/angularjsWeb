import {NgModule} from "@angular/core";
import {Http} from '@angular/http';
import {SystemMessagePageModule} from './system-message.module';

@NgModule()
export class SystemMessageService {
  constructor(public http: Http) {
  }

  getData(url, param): Promise<SystemMessagePageModule> {
    return this.http.get(url, param)
      .toPromise()
      .then(response => response.json()  as SystemMessagePageModule)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
