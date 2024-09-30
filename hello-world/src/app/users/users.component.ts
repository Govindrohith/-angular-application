import { Component, OnInit } from '@angular/core';
// import { error } from 'console';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any[]=[];

  constructor(private userdataservice : UserDataService) { }

  ngOnInit(): void {
    console.log(this.userdataservice.getAllUsers());
    
    this.userdataservice.getAllUsers().subscribe(
      (succ)=>{
        console.log("hello");
        console.log(succ);
        this.users=succ;
              
      },
      (err)=>{
        console.log("ERROR");  
      }
    );
  }

}
