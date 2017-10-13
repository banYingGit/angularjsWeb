import {Component, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'
/**
 * Generated class for the NumberBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'number-box',
  templateUrl: 'number-box.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NumberBoxComponent),
    multi: true
  }]
})
export class NumberBoxComponent implements ControlValueAccessor {

  @Input() numVal: number;
  private propagateChange: any = {};


  constructor() {

  }

  increment() {
    this.numVal++;
    this.propagateChange(this.numVal);//值传递
  }

  decrement() {
    this.numVal = this.numVal === 1 ? 1 : this.numVal - 1;
    this.propagateChange(this.numVal);//值传递
  }

  writeValue(val: number): void {
    if (val) {
      this.numVal = val;
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

