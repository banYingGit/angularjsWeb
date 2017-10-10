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
import {MakeWelcomePage} from '../pages/make-welcome/make-welcome';
import {MakePage} from '../pages/make/make';
import {MakeResultPage} from '../pages/make-result/make-result';


/*service*/
import {IndexService} from '../pages/index/index.service';
import {ChannelListService} from '../pages/channel-list/channel-list.service';
import {NewsListService} from '../pages/news-list/news-list.service';
import {MasterDetailsService} from '../pages/master-details/master-details.service';
import {ArticleDetailsService} from '../pages/article-details/article-details.service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    IndexPage,
    NewsListPage,
    ChannelListPage,
    ArticleDetailsPage,
    MasterDetailsPage,
    MakeWelcomePage,
    MakePage,
    MakeResultPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsHideOnSubPages: 'true'}),
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
    MasterDetailsPage,
    MakeWelcomePage,
    MakePage,
    MakeResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IndexService,
    ChannelListService,
    NewsListService,
    MasterDetailsService,
    ArticleDetailsService
  ]
})
export class AppModule {
}
