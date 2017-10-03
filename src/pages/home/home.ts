import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, OnDestroy {

  today: Date;
  timer$: Subscription;

  constructor(public navCtrl: NavController, public platform: Platform) { }

  ngOnInit() {
    this.timer$ = Observable.timer(0, 1000).subscribe(
      () => this.today = new Date()
    );
  }

  onExit() {
    this.platform.ready().then(() => {
      this.platform.exitApp();
    });
  }

  ngOnDestroy() {
    this.timer$.unsubscribe();
  }

}
