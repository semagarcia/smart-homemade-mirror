import {
  Component,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs/Observable'
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
export class WatchComponent implements OnInit {

  text: string;

  private data: Observable<Date>;
  private today: Date;
  private anyErrors: boolean;
  private finished: boolean;

  constructor() {
    console.log('Hello WatchComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.data = new Observable(observer => {
      setInterval(() => {
        observer.next(new Date());
      }, 500);

    });

    let subscription = this.data.subscribe(
      (value) => { this.today = value }
    );
  }

}
