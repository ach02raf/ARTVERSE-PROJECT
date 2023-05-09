import { Component, OnInit } from '@angular/core';
import { SinglesService } from "src/app/services/singles.service";

@Component({
  selector: 'app-show-challenge',
  templateUrl: './show-challenge.component.html',
  styleUrls: ['./show-challenge.component.scss']
})
export class ShowChallengeComponent implements OnInit {

  challengesData : any ;
  constructor(private singlesService : SinglesService ) { }

  ngOnInit(): void {
    this.getchanlleng();
  }


  getchanlleng(){
    
  
    this.singlesService.get_chanllenge().subscribe(async (data) => { 
        console.log("data project ", data);
        
        this.challengesData = await data;
   
          }
    );
  } 

  count(list: any) {
    return list.length;
  }
}
