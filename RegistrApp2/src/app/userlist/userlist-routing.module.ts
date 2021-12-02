import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserlistPage } from './userlist.page';

const routes: Routes = [
  {
    path: '',
    component: UserlistPage
  },
  {
    path: 'new-user',
    loadChildren: () => import('./new-user/new-user.module').then( m => m.NewUserPageModule)
  },
  {
    path: 'new-user',
    loadChildren: () => import('./new-user/new-user.module').then( m => m.NewUserPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserlistPageRoutingModule {}
