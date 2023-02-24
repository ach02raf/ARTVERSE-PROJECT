 

import { Component, OnInit } from "@angular/core"; 

 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit   { 
  constructor() { }  
 
   
  
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    
   
  }
  
}
