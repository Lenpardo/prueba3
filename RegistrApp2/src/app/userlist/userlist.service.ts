import { Injectable } from '@angular/core';
import { User } from './user.model';
import {ServiciosService} from '../servicios/servicios.service';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {
  
  public listUser: User[] = [];
  user: User;
  db: ServiciosService;

  constructor( db: ServiciosService) {
    this.db=db;
 }
 getDabaseState()
 {
   return this.db.getDatabaseState();
 }
 getUsuarios()
 {
   this.db.getDatabaseState().subscribe(rdy => {
     if (rdy) {
       this.db.getUsuarios().subscribe(usuarios => {
         this.listUser = usuarios;
       });
     }
   });
   return this.listUser;
 }
 getUsuario(idUser: string): Promise<User>
 {
     return this.db.getUsuario(idUser).then(data => {
         this.user = data;
         return this.user;
      });
  }


addUsuario(nombre: string, apellidos: string, domicilio: string, email: string, fono: string)
 {
   this.db.getDatabaseState().subscribe(rdy => {
     if (rdy) {
      alert('Usuario agregado');
       this.db.addUsuario(nombre,apellidos,domicilio,email,fono);
     }
   });
 }
 
updateUsuario(id: string,nombre: string, apellidos: string, domicilio: string, email: string, fono: string)
 {
   this.db.getDatabaseState().subscribe(rdy => {
     if (rdy) {
       alert('Actualiza Datos');
       this.db.updateUsuario(nombre,apellidos,domicilio,email,fono,id);
     }
   });
 }

 deleteUsuario(id: string)
 {
   this.db.getDatabaseState().subscribe(rdy => {
     if (rdy) {
      alert('Usuario eliminado');
       this.db.deleteUsuario(id);
     }
   });
 }
}
