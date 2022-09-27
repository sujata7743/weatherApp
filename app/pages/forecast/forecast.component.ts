import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from 'src/app/Services/weather-api.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  allIndiaData: any;
  temperature: any;
  humidity: any;
  visibility:any;
  pressure: any;
  windspeed: any;
  cityArray: any []=[];
  cityName: any;
   
   
  constructor(private service:WeatherApiService) { }

  ngOnInit(): void {
    this.getCityList()
    this.getCityList()
  }
  getCurrentWeather(cityName:any){
    this.service.getWeatherDetails(cityName).subscribe((response:any)=>{
      this.humidity = response.main.humidity;
      this.pressure = response.main.pressure;
      this.windspeed = response.main.windspeed;
      this.temperature = response.main.temp; 
      this.visibility=response.visibility;
    });
  }
  
  getCityList(){
    this.service.cityList().subscribe((response:any)=>{
      console.log('list of Cities:'+JSON.stringify(response));
      this.cityArray=response.data;
      this.getCurrentWeather('pune')
      
    })
  }
  
  getCityData(cityName: any){
   console.log('city Name'+JSON.stringify(cityName));
   this.getCurrentWeather(cityName)
   
  }
}
  
 

