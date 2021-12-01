import { Injectable } from '@angular/core';
import { UserSqlite } from './user.model';
import {ServiciosService} from '../servicios/servicios.service';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {
  
  public listUser: UserSqlite[] = [];
  userSqlite: UserSqlite;
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
 getUsuario(idUser: string): Promise<UserSqlite>
 {
     return this.db.getUsuario(idUser).then(data => {
         this.userSqlite = data;
         return this.userSqlite;
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
