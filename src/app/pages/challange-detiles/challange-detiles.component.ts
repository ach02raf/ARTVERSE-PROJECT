import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  ViewChild ,
  OnInit,
} from "@angular/core";
import { PublicationService } from "../../services/publication.service";
import { LoggedInUserService } from "src/app/services/logged-in-user.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { AuthentificationService } from "src/app/services/authentification.service";

import * as buffer from "buffer";

import { SinglesService } from "src/app/services/singles.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-challange-detiles',
  templateUrl: './challange-detiles.component.html',
  styleUrls: ['./challange-detiles.component.scss']
})
export class ChallangeDetilesComponent implements OnInit {
 
 
  @Input() Listimage: any; 
   id : string ;
  constructor(
    private publicationService: PublicationService,
    private loggedUserServ: LoggedInUserService,
    private ref: ChangeDetectorRef, 
    private singlesService : SinglesService ,
    private sanitizer: DomSanitizer,
    private authserv: AuthentificationService ,
     
     private route: ActivatedRoute

  ) {
    this.idUser = this.loggedUserServ.getUserID();
  }

  public commentText: string;
  title : any ;
  idUser: any; 
  List :any ;
  itemCopy : any ;
  ListCopy : any ;

  ngOnInit(): void {
    this.ref.detectChanges(); 
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getchallenge();
  }

  winner(id : any){
  alert(id);

  this.singlesService.winner({id : this.id , id_user : id }).subscribe((next)=>{alert("ok")} );
  }


  async getchallenge() {
    this.singlesService.get_chanllengeByID({id : this.id }).subscribe(async (data) => {
      this.title = await data['title'];
      this.List = await data['participants']; 

            for (let item of data['participants'] ) { 

            this.authserv.findUserById(item.id_user).subscribe( async (userData) => { 
              let itemCopy = await { ...item, userData };
 
            });}
       

    });   
  }


  getImage(idimage: any, idpub: any) {
    for (let item of this.Listimage) {
      if (item.idpub === idpub) {
        for (let itam of item.listimage) {
          if (itam._id === idimage) {
            return itam.safeUrl;
          }
        }
      }
    }
  }

 
 

   
 

}

 
