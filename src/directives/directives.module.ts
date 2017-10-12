import { NgModule } from '@angular/core';
import { ArtyomShowHideDirective } from './artyom/artyom.showHide.directive';
import { ServicesModule } from './../services/services.module';
@NgModule({
	declarations: [ArtyomShowHideDirective],
	imports: [
		ServicesModule
	],
	exports: [ArtyomShowHideDirective]
})
export class DirectivesModule {}
