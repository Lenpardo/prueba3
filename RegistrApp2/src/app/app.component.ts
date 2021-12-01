import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Lista Usuario SQLite', url: '/UserList', icon: 'list' },
    { title: 'Lista Usuario API', url: '/user', icon: 'list' },
    { title: 'Camara', url: 'camara', icon: 'camera' },
    { title: 'Geolocalizacion', url: 'geolocalizacion', icon: 'map' },
    { title: 'Informacion', url: 'inicio', icon: 'help' },
    { title: 'Cerrar sesion', url: 'login', icon: 'log-out' },
  ];
  constructor() {}
}
