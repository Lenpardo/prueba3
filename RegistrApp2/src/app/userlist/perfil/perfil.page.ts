import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserlistService } from 'src/app/userlist/userlist.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  user={
    id:'',
    nombre:'',
    apellidos:'',
    domicilio:'',
    email:'',
    fono:''
  };
userlistService: UserlistService;

campo: string;

constructor(private router: Router,private activateRoute: ActivatedRoute,
     userlistService: UserlistService,public toastController: ToastController) {
       this.userlistService=userlistService;
       this.activateRoute.paramMap.subscribe(
        paramMap=>{
          const idContactoRecibido=paramMap.get('userId');
          alert(idContactoRecibido);
         this.userlistService.getUsuario(idContactoRecibido).then(res=>{
         this.user=res;
         this.user.id=idContactoRecibido;
          });
        }
      );
      }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(
      paramMap=>{
        const idContactoRecibido=paramMap.get('contactoId');
        alert(idContactoRecibido);
       this.userlistService.getUsuario(idContactoRecibido).then(res=>{
       this.user=res;
       this.user.id=idContactoRecibido;
        });
      }
    );
  }
  actualizarContacto()
  {
    if(this.validateModel(this.user)){
      alert('Inicia Actualiza');
      alert('id: '+this.user.id);
      alert('Nombre: '+this.user.nombre);
        this.userlistService.updateUsuario(
          this.user.id,
          this.user.nombre.valueOf(),
          this.user.apellidos.valueOf(),
          this.user.domicilio.valueOf(),
          this.user.email.valueOf(),
          this.user.fono.valueOf());
          this.presentToast('Datos correctamente actualizados');

          alert('Fin Actualiza');
    }
    else
    {
      this.presentToast('Falta completar: '+this.campo);
    }
  }
 borrarContacto(){
  alert('Inicia delete');
        this.userlistService.deleteUsuario(this.user.id);
          this.presentToast('Datos correctamente eliminados');
          alert('Fin Delete');
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