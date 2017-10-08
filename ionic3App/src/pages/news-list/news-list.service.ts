import {NgModule} from "@angular/core";
import {Http} from '@angular/http';
import {NewsListPageModule} from './news-list.module';

@NgModule()
export class NewsListService {
  constructor(public http: Http) {
  }

  getData(url, param): Promise<NewsListPageModule> {
    return this.http.get(url, param)
      .toPromise()
      .then(response => response.json()  as NewsListPageModule)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
