import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { Insomnia } from '@ionic-native/insomnia';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';


import { MyApp } from './app.component';
import { ComponentsModule } from './../components/components.module';
import { DirectivesModule } from './../directives/directives.module';
import { ServicesModule } from './../services/services.module';
import {ArtyomShowHideDirective} from './../directives/artyom/artyom.showHide.directive';

import { HomePage } from './../pages/home/home';
import { NeonPage } from './../pages/neon/neon';

export const pagesComponent = [
	HomePage,
	NeonPage
];


@NgModule({
  declarations: [
    MyApp,
    pagesComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DirectivesModule,
    ServicesModule,
    ComponentsModule,
    AngularFontAwesomeModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ...pagesComponent
  ],
  providers: [
    AndroidFullScreen,
    ArtyomShowHideDirective,
    Insomnia,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
