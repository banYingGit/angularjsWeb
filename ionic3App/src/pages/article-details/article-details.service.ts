import {NgModule} from "@angular/core";
import {Http} from '@angular/http';
import {ArticleDetailsPageModule} from './article-details.module';

@NgModule()
export class ArticleDetailsService {
  constructor(public http: Http) {
  }

  getData(url, param): Promise<ArticleDetailsPageModule> {
    return this.http.get(url, param)
      .toPromise()
      .then(response => response.json()  as ArticleDetailsPageModule)
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
