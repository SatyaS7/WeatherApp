import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map, take} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {
  API_KEY  = 'SJtLy0wNppl58fwcHcMcFKo9i4tkASgJlgLSmXkJ'
  constructor(private httpClient: HttpClient) { }

  public getWeather(){
    return this.httpClient.get(`https://api.nasa.gov/insight_weather/?api_key=${this.API_KEY}&feedtype=json&ver=1.0`);
  }
}
