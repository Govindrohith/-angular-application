import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {

  constructor() { 
    console.log("lifecyclecomponent:constructor");
    
  }

  ngOnInit(): void {
    console.log("lifecyclecomponent:oninit");
    
  }
  handleClick(){
    console.log("lifecomponent:handleclick");
    
  }

}
