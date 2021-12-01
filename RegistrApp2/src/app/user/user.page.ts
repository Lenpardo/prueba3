import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {ServiciosService} from '../servicios/servicios.service';
import { HttpClient } from '@angular/common/http';
import { rendererTypeName } from '@angular/compiler';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  public datosObservable: Observable<any>;

  constructor(private serviciosService: ServiciosService) { 
    this.datosObservable = this.serviciosService.get_Datos();
  }
  ngOnInit() {}

}
