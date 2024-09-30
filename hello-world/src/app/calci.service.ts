import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalciService {

  constructor() { }
  add(input1:number,input2:number){
    return input1+input2;
  }
  sub(input1:number,input2:number){
    return input1-input2;
  }
}
