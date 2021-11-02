import {Component, Input} from '@angular/core';

export interface ListOfProduct{
  name: string;
  price: number;

}

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.component.html',
  styleUrls: ['./lab4.component.css']
})
export class Lab4Component  {

  @Input() test:number = 0;

  @Input() elements: ListOfProduct[] = [];
  sum: number =  0;


  math(){
  for (let item of this.elements ){
    this.sum = Number(item.price) + Number(this.sum)

  }
  }
}
