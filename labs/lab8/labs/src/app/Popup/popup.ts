import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
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
