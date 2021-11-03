import {Component, Input} from '@angular/core';
import {Users} from "../app.component";

@Component({
  selector: 'app-favorite-user',
  templateUrl: './favorite-user.component.html',
  styleUrls: ['./favorite-user.component.css']
})
export class FavoriteUserComponent {

  @Input() FavoritreUser:Users[] = []

}
