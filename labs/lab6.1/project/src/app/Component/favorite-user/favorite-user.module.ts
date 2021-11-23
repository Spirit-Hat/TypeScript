import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import  {FavoriteUserComponent} from "./favorite-user.component";
import { FavoriteUserRoutingModule } from './favorite-user-routing.module';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [FavoriteUserComponent],
  imports: [
    IonicModule,
    CommonModule,
    FavoriteUserRoutingModule,
    FormsModule
  ]
})
export class FavoriteUserModule { }
