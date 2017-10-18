import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the UiHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ui-header',
  templateUrl: 'ui-header.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UiHeaderComponent),
    multi: true
  }]
})
export class UiHeaderComponent implements ControlValueAccessor {

  public headerData = {

    "title": "国礼唐朝",

    "isGoBack": true,
    "goBackFn": function () {
    },
    "isShowRight": false,
    "btnText": "",
    "btnFn": function () {
    }
  };

  private propagateChange: any = {};

  constructor(public navCtrl: NavController, navParams: NavParams) {
  }


  writeValue(val: any): void {
    if (val) {
      this.headerData = val

    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  //返回上一页  isGoBack:false  调用页面方法
  goBack() {
    if (this.headerData.isGoBack) {

      this.navCtrl && this.navCtrl.pop(null, null);

    } else {

      this.headerData.goBackFn()

    }

  }

  //头部右侧操作按钮
  doHeaderBtn() {
    this.headerData.btnFn()
  }

}
