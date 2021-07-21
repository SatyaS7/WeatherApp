import { Component, OnInit } from '@angular/core';
import { WeatherAPIService } from '../weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mars-weather-app';
  sol_keys:any;
  validity_checks: any = [];
  validity_checks_entries: any;
  sols_checked: any;

  constructor(private weatherAPIService: WeatherAPIService) {}

  ngOnInit() {
    this.weatherAPIService.getWeather().subscribe((data) => {
      console.log(data)
      ,this.sol_keys = data['sol_keys']
      ,this.validity_checks = data['validity_checks']
      ,this.sols_checked = data['validity_checks']['sols_checked']
      console.log(this.sol_keys);
      console.log(this.validity_checks);
      console.log(this.sols_checked);

      this.validity_checks_entries = Object.entries(this.validity_checks);

      for (let obj of Object.entries(this.validity_checks)) {
        console.log("object:", obj);
        console.log("object 0:", obj[0]);
        console.log("object 1:", obj[1]['PRE']?.['sol_hours_with_data']);
      }
    });
    
    // console.log(y);
  }
}
