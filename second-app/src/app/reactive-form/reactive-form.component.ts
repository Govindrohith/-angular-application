import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  formVar:FormGroup | any;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formVar=this.fb.group({
      id:['',[Validators.required]],
      name:['Rohith',[Validators.required,Validators.minLength(5)]],
      age:['',[Validators.required,Validators.min(18)]],
      // mobilenumber:['',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]],
      date:['',[validateDate]],
      address:this.fb.group({
        street1:['',Validators.required],
        street2:['',Validators.required]
      }),
    });
  }
  handleSubmit(){
    alert("you have submitted succesfully" +JSON.stringify(this.formVar.value))
  }

}
function validateDate(inputDate:FormControl){
  
  console.log(inputDate.value);

  const inputDateObj= new Date(inputDate.value);
  // inputDateObj.setHours(0,0,0,0);
  const today =new Date();
  // today.setHours(0,0,0,0)
  if(inputDateObj<=today){
    return {msg:'only enter future dates'}
  }
  else{
    return null;
  }
  
}
