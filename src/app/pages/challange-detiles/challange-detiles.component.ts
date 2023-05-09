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
 


  @Input() ListCopy: any;
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
  idUser: any; 
  List :any ;
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
     this.List = await data['participants'];
           console.log('====================================');
           console.log(data['participants']);
           console.log('====================================');


          /*  for (let item of this.List) { 
            this.authserv.findUserById(item.id_user).subscribe((userData) => {
              let itemCopy = { ...item, userData };
              this.ListCopy.push(itemCopy);
    
              let imageforpub = [];
              for (let itam of itemCopy.img) {
                this.publicationService
                  .getImage(itam.idimg)
                  .subscribe(async (data) => {
                    const imageDataUrl = buffer.Buffer.from(
                      data["img"]["data"]["data"]
                    ).toString("base64");
                    const safeUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(
                      `data:data:image/png;base64,${imageDataUrl}`
                    );
                    imageforpub.push({ _id: data["_id"], safeUrl: safeUrl });
                  });
              }
              this.Listimage.push({
                idpub: itemCopy._id,
                listimage: imageforpub,
              });
            });
          } */

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

 
