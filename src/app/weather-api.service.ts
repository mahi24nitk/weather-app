import { Injectable } from '@angular/core';
import {HttpClient}   from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http:HttpClient) { }
  getWeather(location):Observable<any>{
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?&q='+location +'&appid=886705b4c1182eb1c69f28eb8c520e20')
  }
}
