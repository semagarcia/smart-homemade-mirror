import { NeonPage } from './../neon/neon';
import { App, ViewController } from 'ionic-angular';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Observable, Subscription } from 'rxjs/Rx';


import { ArtyomAccessService } from './../../services/artyon/artyon.access.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnDestroy, OnInit {

  today: Date = new Date();
  timer$: Subscription;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
    public appCtrl: App, public platform: Platform) { }

  ngOnInit() {

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
    this.navCtrl.push(NeonPage);
  }
}
