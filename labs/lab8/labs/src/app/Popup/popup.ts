import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {User} from "../model/user.model";
import {SimpleServiceService} from "../services/simple-service.service";

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogContentExampleDialog {
  favorites:User[] = []

  constructor(@Inject(MAT_DIALOG_DATA) public data: User, private  simpleService: SimpleServiceService) {
  }

  favorite(){
    this.simpleService.changeCount(this.data)
  }

}

@Component({
  selector: 'Popup',
  template: '',
})
export class Popup {

  constructor(public dialog: MatDialog) {
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
}
