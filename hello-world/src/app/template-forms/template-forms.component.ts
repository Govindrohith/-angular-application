import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  takeInputData:string="";
  userName:string="";
  // uInput:string="";

  constructor() { }

  ngOnInit(): void {
  }

handleSubmit(formData:any){
  alert("you logged "+ JSON.stringify(formData));
}

}
