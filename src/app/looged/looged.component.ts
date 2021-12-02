import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-looged',
  templateUrl: './looged.component.html',
  styleUrls: ['./looged.component.css']
})
export class LoogedComponent implements OnInit {

  sum : number;
  diff : number;
  product : number;
  div : number;
  i1 : number;
  i2 : number;

  constructor() { }

  ngOnInit() {
  }

  onAddClick(v1,v2){
    this.i1= parseInt(v1);
    this.i2= parseInt(v2);
    this.sum = this.i1 + this.i2;
  }
  onSubtractClick(v1,v2){
    this.i1= parseInt(v1);
    this.i2= parseInt(v2);
    this.diff = this.i1 - this.i2;
  }
  onMultiplyClick(v1,v2){
    this.i1= parseInt(v1);
    this.i2= parseInt(v2);
    this.product = this.i1 * this.i2;
  }
  onDivideClick(v1,v2){
    this.i1= parseInt(v1);
    this.i2= parseInt(v2);
    this.div = this.i1 / this.i2;
  }
}
