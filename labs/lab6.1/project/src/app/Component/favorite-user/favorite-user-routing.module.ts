import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {FavoriteUserComponent} from "./favorite-user.component";

const routes: Routes = [
  {
    path: '',
    component:FavoriteUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteUserRoutingModule { }
