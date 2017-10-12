import {
  Component,
  OnInit
} from '@angular/core';

/**
 * Generated class for the WatchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'watch',
  templateUrl: 'watch.html',
  styleUrls: [
    //'watch.scss'
  ]
})
export class WatchComponent implements OnInit {

  text: string;
  today: Date;

  constructor() {
    console.log('Hello WatchComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
    setInterval(() => {
      this.today = new Date();
    }, 500);
  }
}
