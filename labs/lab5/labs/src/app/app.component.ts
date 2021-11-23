import { Component } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {range} from "rxjs";

import {User} from "./model/user.model";
import {UsersService} from "./services/users.service";

import {SimpleServiceService} from "./simple-service.service"

// import {Users} from "./model/Users.Interface";

import {MAT_DIALOG_DATA,MatDialog} from '@angular/material/dialog';
import {DialogContentExampleDialog} from "./Popup/popup";




export interface Users {
  name: string ;
  email: any;
  login: string ;
  password: string;
  phonenumber: string;

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'labs';

  user:User[] = []
  favorite:Users[] = []


  constructor(  private userService:UsersService,public dialog: MatDialog, private  simpleService: SimpleServiceService) {
    this.user = this.userService.getUser()
  }
  openDialog(object:any){

    const dialogRef = this.dialog.open(DialogContentExampleDialog,{
      data: {
        name: object.name,
        email: object.email,
        login: object.login,
        password: object.password,
        phonenumber: object.phonenumber
      }
      })
  }
  test(object:any){
  console.log("I am work" + object)
    this.favorite.push(object)
    console.log(this.favorite)
  }
  ngOnInit(): void {
    this.simpleService.favorites$.subscribe((count)=>this.test(count))
  }
  private log(data: any): void {
    console.log(data);
  }
}
// @Component({
//   selector: 'dialog-data-example-dialog',
//   templateUrl: 'dialog-data-example-dialog.html',
// })
// export class DialogContentExampleDialog {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: Users) {
//   }
//
// }
