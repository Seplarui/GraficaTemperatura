import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'temperatura';
  chart = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.daysWeather()
      .subscribe(res => console.log(res));
  }
}
