import {NgModule} from "@angular/core";
import {Http} from '@angular/http';
import {UserPageModule} from './user.module';

@NgModule()
export class UserService {
  constructor(public http: Http) {
  }

  getData(url, param): Promise<UserPageModule> {
    return this.http.get(url, param)
      .toPromise()
      .then(response => response.json()  as UserPageModule)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
