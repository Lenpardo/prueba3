import { Component, OnInit } from '@angular/core';
import { UserlistService } from './userlist.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {
  listUser  =[];
  userlistService: UserlistService;

  constructor( userlistService: UserlistService) { 
    this.userlistService=userlistService;
  }
 ngOnInit() {
   this.listUser=this.userlistService.getUsuarios();
 }
 ionViewWillEnter() {
 this.listUser=this.userlistService.getUsuarios();
}

}
