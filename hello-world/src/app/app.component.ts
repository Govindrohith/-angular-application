import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { EmpServices } from './emp.services';
import { CalciService } from './calci.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello-world';
  showData:boolean=false;
  homeData: any[] = [];
   
  constructor(private empservices:EmpServices,private calciservice:CalciService){
    console.log("appcomponenent:constructor") 
      
    }  
  ngOnInit(): void {
      console.log("appcomponet:ngoninit");
      // this.homeData= [
      //   { id: 666, name: 'Raj', age: 45 },
      //   { id: 667, name: 'Raja', age: 46 },
      //   { id: 668, name: 'Raju', age: 47 },
      // ]
      // let obj=new EmpServices("rohith"); //obj creation 
      this.homeData=this.empservices.getAllEmps();
      
  }

  handleClick(){
    const d=this.calciservice.sub(1,2)
    alert(d);
    this.showData=true;
  }
  controllAll(){
    this.showData=false
  }
}
