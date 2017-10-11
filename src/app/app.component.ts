import { NeonPage } from './../pages/neon/neon';
import { Subscription, Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import {  Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { Insomnia } from '@ionic-native/insomnia';

import { HomePage } from './../pages/home/home';

import Artyom from './../app/shared/services/artyom.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  rootPage: any = HomePage;
  timer$: Subscription;
  today;

  constructor(private androidFullScreen: AndroidFullScreen,
    private insomnia: Insomnia,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // Full screen
      this.androidFullScreen.isImmersiveModeSupported()
        .then(() => this.androidFullScreen.immersiveMode())
        .catch((error: any) => console.log(error));

      // Prevent the screen of the mobile device from falling asleep
      this.insomnia.keepAwake()
        .then(
        () => console.log('success'),
        () => console.log('error')
        );
    });
  }
  ngOnInit() {
    // Create a variable that stores your instance
    const artyom = new Artyom();

    // Add command (Short code artisan way)
    artyom.on(['prueba', 'termo']).then((i) => {
      switch (i) {
        case 0:
          artyom.say("esto es una prueba");
          break;
        case 1:
          artyom.say("esto es un termo");
          break;
      }
    });

    // // Smart command (Short code artisan way), set the second parameter of .on to true
    // artyom.on(['Repeat after me *'], true).then((i, wildcard) => {
    //   artyom.say("You've said : " + wildcard);
    // });

    // or add some commandsDemostrations in the normal way
    artyom.addCommands([
      {
        indexes: ['Cómo te llamas'],
        action: (i) => {
          artyom.say("Me llamo Pepe");
          
        }
      }
    ]);

    // Start the commands !
    artyom.initialize({
      lang: "es-ES", // GreatBritain english
      continuous: true, // Listen forever
      soundex: true,// Use the soundex algorithm to increase accuracy
      debug: true, // Show messages in the console
      executionKeyword: "empezar",
      listen: true, // Start to listen commands !

      // If providen, you can only trigger a command if you say its name
      // e.g to trigger Good Morning, you need to say "Jarvis Good Morning"
      name: "comando"
    }).then(() => {
      console.log("Artyom has been succesfully initialized");
    }).catch((err) => {
      console.error("Artyom couldn't be initialized: ", err);
    });

    this.timer$ = Observable.timer(0, 1000).subscribe(
      () => this.today = new Date()
    );
  }


  talk() {

    const artyom = new Artyom();
    /**
   * To speech text
   */
    artyom.say("Si amigo que tal estas?", {
      lang: "es-ES",
      onStart: () => {
        console.log("Reading ...");
      },
      onEnd: () => {
        /* console.log("No more text to talk");
 
         // Force the language of a single speechSynthesis
         artyom.say("Si, esto está en Español", {
           lang: "es-ES"
         });*/
      }
    });
  }

}

