import { Component } from '@angular/core';

/**
 * Generated class for the WatchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'watch',
  templateUrl: 'watch.html'
})
export class WatchComponent {

  text: string;

  constructor() {
    console.log('Hello WatchComponent Component');
    this.text = 'Hello World';
  }

}
