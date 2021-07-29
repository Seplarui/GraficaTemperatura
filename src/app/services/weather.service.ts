import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  daysWeather() {
    const urlAPI = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Valencia,es&units=metric&cnt=7&appid=0dabff1363e5afe3c1ad13ddd579a071';
    return this._http.get(urlAPI)
    .pipe(map(res => res));
  }


}
