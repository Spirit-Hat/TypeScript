import { Component, OnInit } from '@angular/core';
import {SimpleServiceService} from "../../services/simple-service.service";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-favorite-user',
  templateUrl: './favorite-user.component.html',
  styleUrls: ['./favorite-user.component.scss'],
})
export class FavoriteUserComponent implements OnInit {


  constructor( public  simpleService: SimpleServiceService
  )
  {
    console.log("I am work")
    simpleService.getValue()

    // console.log(this.simpleService.favorites$)
  }
  test(object:any){
    this.simpleService.TestStorage(object)
  }

  ngOnInit(): void {
    }

}
