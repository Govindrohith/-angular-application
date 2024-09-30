import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  getdata:string="";
  passdata:string="";

  constructor() { }

  ngOnInit(): void {
  }
  handleData(something:any){
    alert("you logged in"+JSON.stringify(something))
  }

}
