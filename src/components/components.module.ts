import { NgModule } from '@angular/core';
import { WatchComponent } from './watch/watch';
import { CommonModule } from '@angular/common';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { DirectivesModule } from './../directives/directives.module';
import { IonicPageModule } from 'ionic-angular';
import { ManualComponent } from './manual/manual';
import { WeatherComponent } from './weather/weather';

@NgModule({
	declarations: [WatchComponent,
    ManualComponent,
    WeatherComponent],
	imports: [
		CommonModule,
		IonicPageModule.forChild(WatchComponent),
		DirectivesModule,
		AngularFontAwesomeModule
	],
	exports: [WatchComponent,
    ManualComponent,
    WeatherComponent]
})
export class ComponentsModule {}
