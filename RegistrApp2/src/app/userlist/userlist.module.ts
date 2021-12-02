import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';

import { IonicModule } from '@ionic/angular';

import { UserlistPageRoutingModule } from './userlist-routing.module';

import { UserlistPage } from './userlist.page';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserlistPageRoutingModule,
  ],
  declarations: [UserlistPage]
})
export class UserlistPageModule {}
