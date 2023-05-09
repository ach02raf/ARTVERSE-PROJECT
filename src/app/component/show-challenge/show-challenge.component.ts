import { Component, OnInit } from '@angular/core';
import { SinglesService } from "src/app/services/singles.service";
import { AuthentificationService } from "src/app/services/authentification.service";

@Component({
  selector: 'app-show-challenge',
  templateUrl: './show-challenge.component.html',
  styleUrls: ['./show-challenge.component.scss']
})
export class ShowChallengeComponent implements OnInit {

  challengesData : any ;
  constructor(private singlesService : SinglesService ,     private authserv: AuthentificationService,
    ) { }

  ngOnInit(): void {
    this.getchanlleng();
  }


  getchanlleng(){
    
  
    this.singlesService.get_chanllenge().subscribe(async (data) => { 
         
        this.challengesData = await data;
        
   
          }
    );
  } 

  count(list: any) {
    return list.length;
  }

  
}
