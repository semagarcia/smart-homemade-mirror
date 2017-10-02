import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, OnDestroy {

  today: Date;
  timer$: Subscription;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.timer$ = Observable.timer(0, 1000).subscribe(
      () => this.today = new Date()
    );
  }

  ngOnDestroy() {
    this.timer$.unsubscribe();
  }

}
