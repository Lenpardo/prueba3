import { Component, OnInit } from '@angular/core';
import { Geoposition } from '@ionic-native/geolocation';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit {

  constructor() { }
  // ngAfterViewInit(){
  //   this.geolocationNative();
  // }
  ngOnInit() {
  }
  // geolocationNative(){
  //   this.geolocation.getCurrentPosition().then((geposition: Geoposition)=>{
  //     console.log(geposition);
  //   })
  // }

}
