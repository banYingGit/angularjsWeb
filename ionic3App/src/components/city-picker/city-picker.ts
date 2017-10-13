import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'
import {CityPickerService} from './ciyt-picker.service';
/**
 * Generated class for the CityPickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'city-picker',
  templateUrl: 'city-picker.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CityPickerComponent),
    multi: true
  }]
})
export class CityPickerComponent implements ControlValueAccessor {

  cityPicker = '';
  listdata = [];
  isCityPiker: boolean

  private propagateChange: any = {};

  constructor(public cityPickerService: CityPickerService) {

    var $this = this;
    /*获取省*/
    var dataUrl = './assets/data/province.json';
    this.cityPickerService
      .getData(dataUrl, '')
      .then(function (data) {

        $this.listdata = data.itemsObj;

      });


  }

  choose(data) {
    console.log('data', data)
    var $this = this;
    this.cityPicker = this.cityPicker + data.name

    if (data.child == true && data.level == '1') {

      var cityUrl = './assets/data/city.json',
        cityParam = {id: data.id};

      this.cityPickerService
        .getData(cityUrl, cityParam)
        .then(function (data) {

          $this.listdata = data.itemsObj;

        });

    }

    else if (data.child == true && data.level == '2') {

      var areaUrl = './assets/data/area.json',
        areaParam = {id: data.id};

      this.cityPickerService
        .getData(areaUrl, areaParam)
        .then(function (data) {

          $this.listdata = data.itemsObj;

        });

    } else if (data.child == false) {

      console.log('选完了', $this.cityPicker, $this.isCityPiker)

      $this.isCityPiker = false

    }

  };

  writeValue(val: string): void {
    if (val) {
      this.cityPicker = val;
    }

  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }
}
