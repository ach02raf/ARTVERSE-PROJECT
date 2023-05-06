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
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

import * as buffer from "buffer";
import { AuthentificationService } from "src/app/services/authentification.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SinglesService } from "src/app/services/singles.service";
@Component({
  selector: "app-for-you-list",
  templateUrl: "./for-you-list.component.html",
  styleUrls: ["./for-you-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ForYouListComponent implements OnInit {
  @Input() source: string;
  @Input() idprofile: string;
  @Input() refresh: boolean;
  @ViewChild('modalContent', { static: true }) modalContent: any;
  constructor(
    private publicationService: PublicationService,
    private loggedUserServ: LoggedInUserService,
    private sanitizer: DomSanitizer,
    private ref: ChangeDetectorRef,
    private authserv: AuthentificationService,
    private singlesService : SinglesService ,
    private modalService: NgbModal
  ) {
    this.idUser = this.loggedUserServ.getUserID();
  }
  imageData: any;
  List = [];
  ListCopy = [];
  public commentText: string;
  loggedInUser: any;
  public isCollapsed: boolean[] = [];
  Listimage = [];
  idUser: any;
  repostReason: string;
  repostComments: string;
  text : String ;
  itemId: string
  ngOnInit(): void {
    this.loggedUserServ.findUserById(this.idUser).subscribe((res) => {
      this.loggedInUser = res;
    });

    this.getPubliction(this.source);
  }
  findUser(id: any) {
    this.authserv.findUserById(id).subscribe((data) => {});
  }
  async getPubliction(source: string) {
    this.publicationService.getPost().subscribe(async (data) => {
      this.List = await data;

      for (let item of this.List) {
        let shouldAddItem = true;

        if (source === "profile" && item["Id_user"] !== this.idprofile) {
          shouldAddItem = false;
        }

        if (shouldAddItem) {
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

      }
      this.ListCopy.reverse();
      this.ref.detectChanges();
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

  likePost(id: number) {
    const data = { publicationId: id, UserId: this.loggedInUser._id };
    this.publicationService.Reaction(data).subscribe((data) => {
      alert(id);
    });
  }

  // Dislike a post
  reaction(list: any) {
    const reactionIndex = list.findIndex((reaction) => reaction.idUser === 0);

    if (reactionIndex > -1) {
      return true;
    } else {
      return false;
    }
  }
  reactioncount(list: any) {
    return list.length;
  }
  // to change the date  from 2023-04-18T00:29:38.643Z to 1h up to 23h and from 1week up to 10 week then in formt dd/mm/yyyy
  format(date: string): string {
    const now = new Date();
    const diff = Math.abs(now.getTime() - Date.parse(date));
    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));

    if (diffHours <= 23) {
      return `${diffHours}h`;
    } else if (diffDays <= 6) {
      return `${diffDays}d`;
    } else if (diffWeeks <= 10) {
      return `${diffWeeks}w`;
    } /*  else {
      return this.datePipe.transform(Date.parse(date), 'dd/MM/yyyy');
    } */
  }

   
  openModal(itemId: string) {
    this.itemId = itemId;
    const modalRef = this.modalService.open(this.modalContent);
     
  }


  

  onSubmit(event) {
    event.preventDefault();
    if (this.repostReason !== 'Other') {
      console.log('Repost reason:', this.repostReason);
     this.text = this.repostReason ;
    } else {
      console.log('Repost reason:', this.repostReason, 'Repost comments:', this.repostComments);
     this.text = this.repostComments ;
    }

    this.singlesService.send_single({Id_user : this.idUser , text : this.text , idpubliction :  this.itemId  }).subscribe(
      (response) => {
        console.log("ok", response);
        
        const modalRef = this.modalService.dismissAll ;
        alert("your alert has been send ");
        return ;
      },
      (error) => {
        const modalRef = this.modalService.dismissAll;
        alert("try agine ");
        return ;
      }
    );

  }


}
