import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { Insomnia } from '@ionic-native/insomnia';

import { HomePage } from './../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  rootPage: any = HomePage;

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
  
  }

}

