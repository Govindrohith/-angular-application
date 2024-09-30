import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  HomeData: any[] = [];
  selectedEmp: any;


  constructor() { }

  ngOnInit(): void {
  }
  handleView(selectEmp: any) {
    // alert(JSON.stringify(selectEmp));
    this.selectedEmp = selectEmp;
  }
  handleHide(){
    this.selectedEmp=null;
  }
 
}
