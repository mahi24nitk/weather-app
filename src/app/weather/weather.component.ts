import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
import {WeatherApiService}  from  '../weather-api.service'


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public searchWeather:any=FormGroup;
  weatherData:any= '';
  constructor(private formBuilder:FormBuilder,
  	private api:WeatherApiService) { }

  ngOnInit() {
  	this.searchWeather=this.formBuilder.group({
  		location:[''],
  		
  	})
  	
  }

  send(formvalue){
  	
    this.api.getWeather(this.searchWeather.value.location)
    .subscribe(data =>{ this.weatherData=data
    	;
    }, Error=>{
    	console.log(Error)
    	alert("This city does not exist")
    });
  }

 
}
