import { Component } from '@angular/core';
import {ListOfProduct} from "./lab4/lab4.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listProduct: ListOfProduct[] = [];


  price: number = 0;
  producrt: string = "";



  add(){

    this.listProduct.push({
      price: this.price,
      name: this.producrt

    })
  }

}
