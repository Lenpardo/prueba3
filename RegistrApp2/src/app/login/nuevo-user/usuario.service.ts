import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuario: Usuario[]=[
    {
      nombre: 'Lenis',
      apellidos:'Pardo',
      usuario: 'lenpardo',
      password: '123456'
    },
    {
      nombre: 'Marcelo',
      apellidos:'Montecinos',
      usuario: 'mmonte',
      password: '123456'
    },
];
  constructor() {
  }
  getUsuario(usuarioInput: string)
  {
    return {
            ...this.listaUsuario.find(usuario => {return usuario.usuario === usuarioInput })
           }
    }
  addUsuario(nombre: string, apellidos: string, usuario: string, password: string)
  {
    this.listaUsuario.push(
      {
        nombre,
        apellidos,
        usuario,
        password
       }
     );
  }
 deleteUsuario(User: string)
 {
   this.listaUsuario.filter(contacto => {return contacto.usuario !== User  });
  }
}