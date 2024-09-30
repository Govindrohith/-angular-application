import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUsers:any[]=[];

  constructor( private userService:UserDataService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (success)=>{
        console.log("hi",success);
        
        this.allUsers=success;
      },
      (fail)=>{}

    );
  }

}
