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
import {NewsListPage} from '../pages/news-list/news-list';
import {ChannelListPage} from '../pages/channel-list/channel-list';
import {ArticleDetailsPage} from '../pages/article-details/article-details';
import {MasterDetailsPage} from '../pages/master-details/master-details';
import {MakeWelcomePage} from '../pages/make-welcome/make-welcome';
import {MakePage} from '../pages/make/make';
import {MakeResultPage} from '../pages/make-result/make-result';
import {MarketPage} from '../pages/market/market';
import {MarketMakePage} from '../pages/market-make/market-make';
import {GoodsDetailsPage} from '../pages/goods-details/goods-details';
import {GoodsEvaluatePage} from '../pages/goods-evaluate/goods-evaluate';
import {GoodsPropertyPage} from '../pages/goods-property/goods-property';

import {OrderSurePage} from '../pages/order-sure/order-sure';
import {AddressListPage} from '../pages/address-list/address-list';
import {AddressPage} from '../pages/address/address';
import {CarPage} from '../pages/car/car';
import {PaymentPage} from '../pages/payment/payment';
import {InvoicePage} from '../pages/invoice/invoice';


/*service*/
import {IndexService} from '../pages/index/index.service';
import {ChannelListService} from '../pages/channel-list/channel-list.service';
import {NewsListService} from '../pages/news-list/news-list.service';
import {MasterDetailsService} from '../pages/master-details/master-details.service';
import {ArticleDetailsService} from '../pages/article-details/article-details.service';
import {MakeResultService} from '../pages/make-result/make-resule.service';
import {MarketService} from '../pages/market/market.service';
import {MarketMakeService} from '../pages/market-make/market.service';
import {GoodsDetailsService} from '../pages/goods-details/goods-details.service';
import {GoodsPropertyService} from '../pages/goods-property/goods-property.service';
import {GoodsEvaluateService} from '../pages/goods-evaluate/goods-evaluate.service';


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
    MakeResultPage,
    MarketPage,
    MarketMakePage,
    GoodsDetailsPage,
    GoodsEvaluatePage,
    GoodsPropertyPage,
    OrderSurePage,
    AddressListPage,
    AddressPage,
    CarPage,
    PaymentPage,
    InvoicePage
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
    MakeResultPage,
    MarketPage,
    MarketMakePage,
    GoodsDetailsPage,
    GoodsEvaluatePage,
    GoodsPropertyPage,
    OrderSurePage,
    AddressListPage,
    AddressPage,
    CarPage,
    PaymentPage,
    InvoicePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IndexService,
    ChannelListService,
    NewsListService,
    MasterDetailsService,
    ArticleDetailsService,
    MakeResultService,
    MarketService,
    MarketMakeService,
    GoodsDetailsService,
    GoodsPropertyService,
    GoodsEvaluateService
  ]
})
export class AppModule {
}
