import { Component } from '@angular/core';
import { Weather } from './wheather.model';
/**
 * Generated class for the WeatherComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherComponent {

  text: string;
  weather: Weather = {
    location: 'Denver, CO',
    temperature: 67,
    precipitation: 20
  };
  constructor() {
    console.log('Hello WeatherComponent Component');
    this.text = 'Hello World';
  }

}
