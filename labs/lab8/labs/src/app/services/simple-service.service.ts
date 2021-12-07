import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class SimpleServiceService {
  public favorites$ = new Subject<User>();

  public changeCount(count: User) {
    this.favorites$.next(count);
  }

  constructor() { }
}
