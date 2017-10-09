import { HomePage } from './../home/home';
import { App, ViewController } from 'ionic-angular';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'page-neon',
  templateUrl: 'neon.html'
})
export class NeonPage implements OnInit, OnDestroy {

  today: Date;
  timer$: Subscription;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
    public appCtrl: App, public platform: Platform) { }

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


  pushPage() {
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(HomePage, {
      id: "123",
      name: "Carl"
    });
  }
}
