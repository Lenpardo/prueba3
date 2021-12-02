import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./camara/camara.module').then( m => m.CamaraPageModule)
  },
  {
    path: 'userlist',
    loadChildren: () => import('./userlist/userlist.module').then( m => m.UserlistPageModule)
  },
  // {
  //   path: 'geolocalizacion',
  //   loadChildren: () => import('./geolocalizacion/geolocalizacion.module').then( m => m.GeolocalizacionPageModule)
  //  },
  // {
  //   path: 'nuevo-user',
  //   loadChildren: () => import('./login/nuevo-user/nuevo-user.module').then( m => m.NuevoUserPageModule)
  // },
  // {
  //   path: 'userlist/:userId',
  //   pathMatch: 'full',
  //   loadChildren: () => import('./userlist/perfil/perfil.module').then( m => m.PerfilPageModule)
  //  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}