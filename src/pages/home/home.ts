import { NeonPage } from './../neon/neon';
import { App, ViewController } from 'ionic-angular';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Observable, Subscription } from 'rxjs/Rx';


import { ArtyomAccessService } from './../../app/shared/services/artyon.access.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnDestroy, OnInit {

  today: Date = new Date();
  timer$: Subscription;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
    public appCtrl: App, public platform: Platform, private _artyon: ArtyomAccessService) { }

  ngOnInit() {
  //  this._artyon.say("Bienvenido al espejo interactivo. Para interactuar con su agente diga Max, y la instruccion");
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
    this.navCtrl.push(NeonPage, {
      id: "123",
      name: "Carl"
    });
  }
}
