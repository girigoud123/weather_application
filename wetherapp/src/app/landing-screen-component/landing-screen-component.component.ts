import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-screen-component',
  templateUrl: './landing-screen-component.component.html',
  styleUrls: ['./landing-screen-component.component.css']
})
export class LandingScreenComponentComponent implements OnInit {

  locationId = new FormControl('');
  findLoactionArry: any;
  locationArry: any = [];
  constructor(private http: HttpClient,private router: Router) {
  }

  ngOnInit(): void {
    this.findLoactionArry = localStorage.getItem("Added_locations")
    this.locationArry = JSON.parse(this.findLoactionArry)
  }
  saveLocation() {
    this.locationArry = []
    this.findLoactionArry = localStorage.getItem("Added_locations")
    this.locationArry = JSON.parse(this.findLoactionArry)
    if (this.locationArry && this.locationArry.length > 0) {
      let APIData
      this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${this.locationId.value}&appid=5a4b2d457ecbef9eb2a71e480b947604`).subscribe((data: any) => {
        APIData = data
        this.locationArry.push({ ZipCode: this.locationId.value, APIDatas: APIData })
        localStorage.setItem('Added_locations', JSON.stringify(this.locationArry))
      })
    } else {
      this.locationArry = []
      let APIData
      this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${this.locationId.value}&appid=5a4b2d457ecbef9eb2a71e480b947604`).subscribe((data: any) => {
        APIData = data
        this.locationArry.push({ ZipCode: this.locationId.value, APIDatas: APIData })
        localStorage.setItem('Added_locations', JSON.stringify(this.locationArry))
      })
    }
  }
  getImage(val: any){
    console.log(val+'.png');
    return val+'.png'
  }
  selectedData(obj:any){
    this.findLoactionArry = localStorage.getItem("Added_locations")
    this.locationArry = JSON.parse(this.findLoactionArry)
    let findObj = this.locationArry.findIndex((b:any) => b.ZipCode == obj.ZipCode )
    this.locationArry.splice(findObj, 1);
    localStorage.setItem('Added_locations', JSON.stringify(this.locationArry))
  }

  showForecast(obj: any){
    this.router.navigate([`forecast/`,obj.ZipCode])
  }

}
