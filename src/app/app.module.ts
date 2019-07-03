import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule}  from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {allAppRoutes} from './route';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {HttpClientModule}  from '@angular/common/http'
import {WeatherApiService}  from './weather-api.service'

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(allAppRoutes),
    HttpClientModule,

  ],
  providers: [WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
