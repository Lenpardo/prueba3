import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';

import { UserPage } from './user.page';

import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: UserPage}]),
  ],
  declarations: [UserPage]
})
export class UserPageModule {}
