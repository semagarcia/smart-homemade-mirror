import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { Insomnia } from '@ionic-native/insomnia';

import { MyApp } from './app.component';
import { HomePage } from './../pages/home/home';
import { NeonPage } from './../pages/neon/neon';
import { SharedModule } from './shared/shared.module';
import { ArtyomAccessService } from './shared/services/artyon.access.service';
import { ArtyomShowHideDirective } from './shared/directives/artyom.showHide.directive';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NeonPage,
    ArtyomShowHideDirective ,
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NeonPage
  ],
  providers: [
    AndroidFullScreen,
    ArtyomAccessService,
    Insomnia,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
