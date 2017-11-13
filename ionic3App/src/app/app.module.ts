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
import {AddressChoosePage} from '../pages/address-choose/address-choose';
import {CarPage} from '../pages/car/car';
import {PaymentPage} from '../pages/payment/payment';
import {InvoicePage} from '../pages/invoice/invoice';

import {OrderPromptPage} from '../pages/order-prompt/order-prompt';
import {OrderDetailPage} from '../pages/order-detail/order-detail';
import {OrderListPage} from '../pages/order-list/order-list';
import {ShareCodePage} from '../pages/share-code/share-code';
import {UserSetPage} from '../pages/user-set/user-set';
import {UserPage} from '../pages/user/user';
import {UserMessagePage} from '../pages/user-message/user-message';
import {SetPage} from '../pages/set/set';
import {SystemMessagePage} from '../pages/system-message/system-message';
import {CommissionPage} from '../pages/commission/commission';
import {ParityPage} from '../pages/parity/parity';

import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {LetterOutPage} from '../pages/letter-out/letter-out';
import {LetterIntoPage} from '../pages/letter-into/letter-into';
import {EvaluatePage} from '../pages/evaluate/evaluate';
import {SearchPage} from '../pages/search/search';
import {WithdrawalsPage} from '../pages/withdrawals/withdrawals';

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
import {CarService} from '../pages/car/car.service';
import {AddressListService} from '../pages/address-list/address-list.service';
import {AddressChooseService} from '../pages/address-choose/address-choose.service';
import {OrderDetailService} from '../pages/order-detail/order-detail.service';
import {OrderPromptService} from '../pages/order-prompt/order-prompt.service';
import {OrderListService} from '../pages/order-list/order-list.service';
import {UserService} from '../pages/user/user.service';
import {UserMessageService} from '../pages/user-message/user-message.service';
import {SystemMessageService} from '../pages/system-message/system-message.service';

/*组件*/
import {NumberBoxComponent} from '../components/number-box/number-box';
import {UiHeaderComponent} from '../components/ui-header/ui-header';

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
    InvoicePage,
    AddressChoosePage,
    OrderPromptPage,
    OrderDetailPage,
    OrderListPage,
    ShareCodePage,
    UserSetPage,
    UserPage,
    SetPage,
    SystemMessagePage,
    CommissionPage,
    ParityPage,
    UserMessagePage,
    LoginPage,
    RegisterPage,
    LetterOutPage,
    LetterIntoPage,
    EvaluatePage,
    SearchPage,
    WithdrawalsPage,
    NumberBoxComponent,
    UiHeaderComponent
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
    InvoicePage,
    AddressChoosePage,
    OrderPromptPage,
    OrderDetailPage,
    OrderListPage,
    ShareCodePage,
    UserSetPage,
    UserPage,
    SetPage,
    SystemMessagePage,
    CommissionPage,
    ParityPage,
    UserMessagePage,
    LoginPage,
    RegisterPage,
    LetterOutPage,
    LetterIntoPage,
    EvaluatePage,
    SearchPage,
    WithdrawalsPage
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
    GoodsEvaluateService,
    CarService,
    AddressListService,
    AddressChooseService,
    OrderPromptService,
    OrderDetailService,
    OrderListService,
    UserService,
    UserMessageService,
    SystemMessageService
  ]
})
export class AppModule {
}
