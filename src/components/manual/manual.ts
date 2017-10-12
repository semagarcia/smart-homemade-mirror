import { Component } from '@angular/core';

/**
 * Generated class for the ManualComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'manual',
  templateUrl: 'manual.html'
})
export class ManualComponent {

  text: string;

  constructor() {
    console.log('Hello ManualComponent Component');
    this.text = 'Hello World';
  }

}
