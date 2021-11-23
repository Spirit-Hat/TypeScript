import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {User} from "../model/user.model";

import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class SimpleServiceService {

  public favorite:User[] = []


  public favorites$ = new Subject<User>();


  public changeCount(count: User) {
    console.log(count)
    this.favorites$.next(count);
  }

  private addFavorite(keys){
    this.favorite = []
    console.log(this.favorite)
    for(var i=0 ; i< keys.length;i++){
      this.storage.get(keys[i]).then((val) => {
        this.favorite.push(val)
      });
    }
  }


  public TestStorage(object:User){
    this.storage.set(object.id, object)
  }

  public getValue(){
    console.log(this.storage.keys().then(value => {
    this.addFavorite(value)
    }))
  }

  public clearStorage(){
    this.storage.clear()
  }

  constructor(private storage: Storage) {
    // this.getValue()

  }
}
