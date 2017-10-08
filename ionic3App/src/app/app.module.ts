import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HttpModule} from '@angular/http';
import {IndexPage} from '../pages/index/index';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';


/*页面*/
// import {LoginPage} from '../pages/login/login';
import {NewsListPage} from '../pages/news-list/news-list';
import {ChannelListPage} from '../pages/channel-list/channel-list';
import {ArticleDetailsPage} from '../pages/article-details/article-details';
import {MasterDetailsPage} from '../pages/master-details/master-details';


/*service*/
import {IndexService} from '../pages/index/index.service';
import {ChannelListService} from '../pages/channel-list/channel-list.service';
import {NewsListService} from '../pages/news-list/news-list.service';
import {MasterDetailsService} from '../pages/master-details/master-details.service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    IndexPage,
    NewsListPage,
    ChannelListPage,
    ArticleDetailsPage,
    MasterDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    IndexPage,
    NewsListPage,
    ChannelListPage,
    ArticleDetailsPage,
    MasterDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IndexService,
    ChannelListService,
    NewsListService,
    MasterDetailsService
  ]
})
export class AppModule {
}
