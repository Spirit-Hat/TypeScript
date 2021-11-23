import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Users} from "../app.component";
import {SimpleServiceService} from "../simple-service.service";

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogContentExampleDialog {
  favorites:Users[] = []

  constructor(@Inject(MAT_DIALOG_DATA) public data: Users, private  simpleService: SimpleServiceService) {
  }

  favorite(){
    this.simpleService.changeCount(this.data)
    // this.favorites.push(this.data)
    // console.log(this.favorites)

  }

}
