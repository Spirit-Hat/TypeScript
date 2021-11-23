import { Component } from '@angular/core';

import {User} from "../../model/user.model";

import {UsersService} from "../../services/users.service";

import { AlertController } from '@ionic/angular';

import {SimpleServiceService} from "../../services/simple-service.service";






@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  favorite:User[] = []

  user:User[] = []
  constructor( private userService:UsersService,public alertCtrl: AlertController,private  simpleService: SimpleServiceService) {
    this.user = this.userService.getUser()
    this.simpleService.clearStorage()
  }
    async showAlert(object:any) {
      const alert = await this.alertCtrl.create({
        header: 'Information User',
        message: "User name:"+ object.name +" " +"email:" +  object.emai+" " +
      "login:" +" " +  object.login +" " + "password:" +" " + object.password +" " +
      "phonenumber:" +" " + object.phonenumber,
        buttons: ['OK']
      });
      await alert.present();
      const result = await alert.onDidDismiss();
      console.log(result);
    }



  test(object:any){
    this.simpleService.TestStorage(object)
  }

}
