import { NeonPage } from './../neon/neon';
import { App, ViewController } from 'ionic-angular';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Observable, Subscription } from 'rxjs/Rx';
import Artyom from './../../app/shared/services/artyom.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, OnDestroy {

  today: Date;
  timer$: Subscription;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
    public appCtrl: App, public platform: Platform) { }

  ngOnInit() {
    // Create a variable that stores your instance
    const artyom = new Artyom();

    // Add command (Short code artisan way)
    artyom.on(['Hola', 'Good afternoon']).then((i) => {
      switch (i) {
        case 0:
          artyom.say("Hola, how are you?");
          break;
        case 1:
          artyom.say("Good afternoon, how are you?");
          break;
      }
    });

    // Smart command (Short code artisan way), set the second parameter of .on to true
    artyom.on(['Repeat after me *'], true).then((i, wildcard) => {
      artyom.say("You've said : " + wildcard);
    });

    // or add some commandsDemostrations in the normal way
    artyom.addCommands([
      {
        indexes: ['Hello', 'Hi', 'is someone there'],
        action: (i) => {
          artyom.say("Hello, it's me");
        }
      },
      {
        indexes: ['Repeat after me *'],
        smart: true,
        action: (i, wildcard) => {
          artyom.say("You've said : " + wildcard);
        }
      },
      // The smart commands support regular expressions
      {
        indexes: [/Good Morning/i],
        smart: true,
        action: (i, wildcard) => {
          artyom.say("You've said : " + wildcard);
        }
      },
      {
        indexes: ['shut down yourself'],
        action: (i, wildcard) => {
          artyom.fatality().then(() => {
            console.log("Artyom succesfully stopped");
          });
        }
      },
    ]);

    // Start the commands !
    artyom.initialize({
      lang: "en-GB", // GreatBritain english
      continuous: true, // Listen forever
      soundex: true,// Use the soundex algorithm to increase accuracy
      debug: true, // Show messages in the console
      executionKeyword: "and do it now",
      listen: true, // Start to listen commands !

      // If providen, you can only trigger a command if you say its name
      // e.g to trigger Good Morning, you need to say "Jarvis Good Morning"
      name: "Jarvis"
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
    artyom.say("Hola amigo que tal estas?", {
      lang: "es-ES",
      onStart: () => {
        console.log("Reading ...");
      },
      onEnd: () => {
        /* console.log("No more text to talk");
 
         // Force the language of a single speechSynthesis
         artyom.say("Hola, esto está en Español", {
           lang: "es-ES"
         });*/
      }
    });
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
