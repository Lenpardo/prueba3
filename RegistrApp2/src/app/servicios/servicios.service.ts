import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Platform, AlertController } from '@ionic/angular';
import { Observable, of } from 'rxjs';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { BehaviorSubject } from 'rxjs';

import { UserSqlite } from '../Userlist/user.model';


interface Dato {
  id: string;
  name: string;
  username: string;
  email: string;
 }



@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private dbReady = new BehaviorSubject<boolean>(false);
  private servicios: SQLiteObject;
  private http: HttpClient;
  private  sqlPorter: SQLitePorter;
  private sqlite: SQLite;

  listUser = new BehaviorSubject([]);

  private user: UserSqlite;
  dato:Dato;
  public baseUr2 = 'https://jsonplaceholder.typicode.com/users';


  constructor( http: HttpClient,plataforma: Platform,sqlite: SQLite, sqlPorter: SQLitePorter)
  {
    plataforma.ready()
   .then(() => {
      this.sqlite=sqlite;
      this.http=http;
      this.sqlPorter=sqlPorter;
      this.sqlite.create({
        name: 'BaseDatoLenis.db',
        location: 'default',
        createFromLocation: 1
      })
      .then((db: SQLiteObject) => {
        this.servicios = db;
          this.crearTablas();
          alert('Creando Tablas');
        }).catch(e =>{
          alert('Error al crear Tablas'  );
          console.error(e);
          console.error('Error al crear Tablas '+ e.message);
        });
   }).catch(e => alert('Error de Plataforma'));
   
  }
     
  crearTablas() {
  this.http.get('../assets/db/BaseDato.sql',{responseType: 'text'})
      .subscribe(sql => {
        this.sqlPorter.importSqlToDb(this.servicios, sql)
          .then(async _ => {
            alert('Base de Dato creada');
             this.cargarUsuarios();
            alert('cargando Usuarios');
            this.dbReady.next(true);
            alert('xxxx-4 ');
          }).catch(e => {
            alert('Error al importar la base de datos');
            console.error(e);
            console.error('Error al importar la base de datos', e.message);
          });
      });
    }

  getDatabaseState() {
    return this.dbReady.asObservable();
  }

 getUsuarios(): Observable<UserSqlite[]>{
          return this.listUser.asObservable();
  }

  cargarUsuarios(){
    return this.servicios.executeSql('SELECT * FROM user', []).then(data => {
      let user: UserSqlite[] = [];

      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
            user.push(
              data.rows.item(i));
        }
      }
      this.listUser.next(user);
    });
  }

getUsuario(id): Promise<UserSqlite> {
  return this.servicios.executeSql('SELECT * FROM user WHERE id = ?', [id]).then(resSelect => { 
      return {
            id: resSelect.rows.item(0).id,
            nombre: resSelect.rows.item(0).nombre,
            apellidos: resSelect.rows.item(0).apellidos,
            domicilio: resSelect.rows.item(0).domicilio,
            email: resSelect.rows.item(0).email,
            fono: resSelect.rows.item(0).fono
      }
    });
  }

  addUsuario(nombre, apellidos,domicilio,email,fono) {
    let data = [ nombre, apellidos,domicilio,email,fono];
    return this.servicios.executeSql('INSERT INTO user (nombre, apellidos, domicilio, email,fono) VALUES (?, ?, ? ,? ,?)', data)
    .then(res => {
     this.cargarUsuarios();
    });
  }
  updateUsuario(nombre, apellidos,domicilio,email,fono,id) {
    alert('Actualiza '+id);
    let data = [ nombre, apellidos,domicilio,email,fono,id];
    return this.servicios.executeSql('UPDATE user SET nombre=?, apellidos=?, domicilio=?, email=?,fono=? WHERE id=?', data)
    .then(res => {
     this.cargarUsuarios();
    });
  }

 deleteUsuario(id) {
    alert('Delete '+id);
    let data = [ id];
    return this.servicios.executeSql('DELETE FROM user  WHERE id=?', data)
    .then(res => {
     this.cargarUsuarios();
    });
  }

  get_Datos() {
    return this.http.get(this.baseUr2 )// api rest

} 
}


//   public baseUrl = 'https://rickandmortyapi.com/api/character/1';
//   // public baseUrl = 'https://jsonplaceholder.typicode.com/posts';
//   public baseUr2 = 'https://jsonplaceholder.typicode.com/users';

//   constructor( private http: HttpClient ) {  }
  
//   get_Datos() {
//     return this.http.get(this.baseUr2 )
    
//     // console.log("get datos")
//   //    .subscribe(res =>{
//   //      console.log(res);
//   // })
//   }
  
  // get_DatosUserId(id) {
  //   let stringUrl=this.baseUrl +'?Id='+id;
  //   alert("----->>>"+stringUrl);
  //   return this.http.get(stringUrl );
  // }

  // get_Dato(id): Observable<Dato>{
  
  //   let stringUrl=this.baseUrl +'/'+id;
  //   console.log("----->>>"+stringUrl);
  //   return  this.http.get<Dato>(stringUrl);
  // }

