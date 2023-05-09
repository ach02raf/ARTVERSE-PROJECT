import { Component, OnInit , ViewChild } from '@angular/core';

import { SinglesService } from "src/app/services/singles.service";
import * as buffer from "buffer";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthentificationService } from "src/app/services/authentification.service";
import { PublicationService } from "src/app/services/publication.service";

@Component({
  selector: 'app-repoted-post',
  templateUrl: './repoted-post.component.html',
  styleUrls: ['./repoted-post.component.scss']
})
export class RepotedPostComponent implements OnInit {

  @ViewChild('modalContent', { static: true }) modalContent: any;

  Listimage = [];
  publiction : any ;
  publictionDetails : any ;
  pubcopy : any ;
   ListCopy: any = [];
   List : any = [];
  constructor(
    private singlesService  : SinglesService ,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal ,
    
    private authserv: AuthentificationService ,
    private publicationService : PublicationService ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.singlesService.get_Single().subscribe(async (data) => {
      console.log("data project ", data);
        for (let element of data) {
        this.authserv.findUserById(element["Id_user"]).subscribe((userData) => {
          this.ListCopy.push( { ...element , userData} );
            }); }
    });
  }

  handleClick(id: any) {
    this.ListCopy.splice(0, this.ListCopy.length);
    this.singlesService.update_Single({id: id}).subscribe((data) => {
      this.getData();
    }, (err) => {
      alert("try agin");
      console.error('An error occurred while updating single', err);
    });
  }


  showPub(idpub : any , source: string){ 
    console.log("id publiction  show "  , idpub);
  const modalRef = this.modalService.open(this.modalContent);

    this.publicationService.getPostByID(idpub).subscribe(async(data) =>{ 
    
       
            this.authserv.findUserById(data['Id_user']).subscribe( async(userData) => {
            this.publictionDetails = await { ...data, userData };
          
              console.log(this.publictionDetails) ;
        
          
          });
     
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
