import { Injectable } from '@angular/core';

import {User} from "../model/user.model"
import {HttpClient, HttpParams} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  response: any;
  user:User[] = []

  getUser(): User[]{
    return this.user
  }
  getResponse(){
    return this.response
  }

  find (){
    this.response = this.http.get('https://randomuser.me/api/?results=20' )
      .subscribe((response)=>{
        this.response = response;
        console.log(this.response)

        for (var i = 0 ; i<20; i++) {
          let name: string = ""
          name = this.response.results[i].name.title + " " +
            this.response.results[i].name.first  + " "
            + this.response.results[i].name.last
          this.user.push( new User(name,
            this.response.results[i].email,this.response.results[i].login.username,
            this.response.results[i].login.password,
            this.response.results[i].phone));
        }

      })
    console.log(this.user)
    // console.log( this.response[0].email)
    //
    // console.log("121212")
    // console.log(this.response)\
    return this.response
  }


  constructor(private http: HttpClient) {
    this.find()
  }
}
