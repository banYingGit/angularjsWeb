import {NgModule} from "@angular/core";
import {Http} from '@angular/http';
import {UserMessagePageModule} from './user-message.module';

@NgModule()
export class UserMessageService {
  constructor(public http: Http) {
  }

  getData(url, param): Promise<UserMessagePageModule> {
    return this.http.get(url, param)
      .toPromise()
      .then(response => response.json()  as UserMessagePageModule)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
