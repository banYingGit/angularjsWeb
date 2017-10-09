import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ArticleDetailsPage} from './article-details';

@NgModule({
  declarations: [
    ArticleDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticleDetailsPage),
  ],
})
export class ArticleDetailsPageModule {
  itemObj: object;
  itemArr: Array<ArrModule>;
}
export class ArrModule {
  proImg: string;
  title: string;
  id: string;
  price: string
}

