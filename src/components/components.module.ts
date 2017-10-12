import { NgModule } from '@angular/core';
import { WatchComponent } from './watch/watch';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './../directives/directives.module';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [WatchComponent],
	imports: [
		CommonModule,
		IonicPageModule.forChild(WatchComponent),
		DirectivesModule
	],
	exports: [WatchComponent]
})
export class ComponentsModule {}
