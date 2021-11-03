import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";


import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {DialogContentExampleDialog} from "./Popup/popup";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { FavoriteUserComponent } from './favorite-user/favorite-user.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogContentExampleDialog,
    FavoriteUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
