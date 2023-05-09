import { Component, OnInit , ViewChild } from '@angular/core';
import { SinglesService } from "src/app/services/singles.service";
import * as buffer from "buffer";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthentificationService } from "src/app/services/authentification.service";
import { PublicationService } from "src/app/services/publication.service";
@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {

  @ViewChild('modalContent', { static: true }) modalContent: any;
  constructor(
    private singlesService  : SinglesService ,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal ,
    
    private authserv: AuthentificationService ,
    private publicationService : PublicationService ,
  ) { }
  public isCollapsed: boolean[] = [];

  Listimage = [];
 publiction : any ;
 pubcopy : any ;
  ListCopy: any = [];
  List : any = [];
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
      this.List = await data;

      for (let item of this.List) {
        let shouldAddItem = true;
 
          this.isCollapsed[item._id] = true;
          this.authserv.findUserById(item.Id_user).subscribe((userData) => {
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
                  const safeUrl: SafeUrl =
                    this.sanitizer.bypassSecurityTrustUrl(
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
        }

        
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
