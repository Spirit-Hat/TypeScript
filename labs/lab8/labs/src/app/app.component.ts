import { Component } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {range} from "rxjs";

import {User} from "./model/user.model";
import {UsersService} from "./services/users.service";

import {SimpleServiceService} from "./services/simple-service.service"


import { Popup} from "./Popup/popup";




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


  constructor(  private userService:UsersService,public popup: Popup, private  simpleService: SimpleServiceService) {
    this.user = this.userService.getUser()
  }


}

