import { Component } from '@angular/core';

/**
 * Generated class for the NumberBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'number-box',
  templateUrl: 'number-box.html'
})
export class NumberBoxComponent {

  text: string;

  constructor() {
    console.log('Hello NumberBoxComponent Component');
    this.text = 'Hello World';
  }

}
