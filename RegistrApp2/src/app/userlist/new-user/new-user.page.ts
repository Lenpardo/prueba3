import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserlistService } from '../userlist.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.page.html',
  styleUrls: ['./new-user.page.scss'],
})
export class NewUserPage implements OnInit {

  usuario={
    nombre:'',
    apellidos:'',
    domicilio:'',
    email:'',
    fono:''
  };
  userlistService: UserlistService;
  campo: string;
  constructor(private router: Router,public toastController: ToastController,
    userlistService: UserlistService) {
      this.userlistService=userlistService;
     }

  ngOnInit() {
  }
  registrarUsuario(){
    if(this.validateModel(this.usuario)){
        this.userlistService.addUsuario(this.usuario.nombre.valueOf(),
          this.usuario.apellidos.valueOf(),
          this.usuario.domicilio.valueOf(),
          this.usuario.email.valueOf(),
          this.usuario.fono.valueOf());
          this.presentToast('Datos registrados correctamente');
    }
    else
    {
      this.presentToast('Falta completar: '+this.campo);
    }
  }
   /**
   * Muestra un toast al usuario
   * @param message Mensaje a presentar al usuario
   * @param duration Duración el toast, este es opcional
   */
    async presentToast(message: string, duration?: number){
      const toast = await this.toastController.create(
        {
          message,
          duration:duration?duration:2000
        }
      );
      toast.present();
    }
    validateModel(model: any){
    for (var [key, value] of Object.entries(model)) {
      if (value==='') {
        this.campo=key;
        return false;
      }
    }
    return true;
  }
}
