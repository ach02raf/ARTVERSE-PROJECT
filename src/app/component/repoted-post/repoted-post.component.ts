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
  id_Sng : any ;
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
       this.ListCopy.splice(0, this.ListCopy.length);

    this.singlesService.get_Single().subscribe(async (data) => {
      console.log("data project ", data);
        for (let element of data) {
        this.authserv.findUserById(element["Id_user"]).subscribe((userData) => {
          this.ListCopy.push( { ...element , userData} );
            }); }
    });
  }

  handleClick(id: any) {
    this.singlesService.update_Single({id: id}).subscribe((data) => {
      this.getData();
    }, (err) => {
      alert("try agin");
      console.error('An error occurred while updating single', err);
    });
  }


  showPub(idpub : any , idSng: any ){ 
    console.log("id publiction  show "  , idpub);
    this.id_Sng = idSng ;
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

  deletePubliction(id : any  ){

    this.publicationService.deletePubliction({id : id  , idSng : this.id_Sng }).subscribe((data) => {
      this.modalService.dismissAll(this.modalContent);
      
      this.getData();
    }, (err) => {
      alert("try agin");
      console.error('An error occurred while updating single', err);
    });
  }


}
