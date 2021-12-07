import {Component, Input} from '@angular/core';
import {User} from "../model/user.model";
import {SimpleServiceService} from "../services/simple-service.service";

@Component({
  selector: 'app-favorite-user',
  templateUrl: './favorite-user.component.html',
  styleUrls: ['./favorite-user.component.css']
})
export class FavoriteUserComponent {

  @Input() FavoritreUser:User[] = []
  constructor(  private  simpleService: SimpleServiceService) {
  }
  ngOnInit(): void {
    this.simpleService.favorites$.subscribe((count)=>this.test(count))
  }
  test(object:any){
    this.FavoritreUser.push(object)
  }
}
