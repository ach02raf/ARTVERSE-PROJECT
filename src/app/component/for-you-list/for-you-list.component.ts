import { Component, OnInit } from "@angular/core";
import { PublicationService } from "../../services/publication.service";
import { LoggedInUserService } from "src/app/services/logged-in-user.service";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import * as buffer from "buffer";
import { AuthentificationService } from "src/app/services/authentification.service";
@Component({
  selector: "app-for-you-list",
  templateUrl: "./for-you-list.component.html",
  styleUrls: ["./for-you-list.component.scss"],
})
export class ForYouListComponent implements OnInit {
  constructor(
    private publicationService: PublicationService,
    private loggedUserServ: LoggedInUserService,
    private sanitizer: DomSanitizer,
    private authserv: AuthentificationService
  ) {
    this.idUser = this.loggedUserServ.getUserID();
  }
  imageData: any;
  List = [];
  ListCopy = [];
  public commentText: string;
  loggedInUser: any;
  isCollapsed = true;
  Listimage = [];
  idUser: any;

  ngOnInit(): void {
    this.loggedUserServ.findUserById(this.idUser).subscribe((res) => {
      this.loggedInUser = res;
      // console.log("foryoulist", this.loggedInUser);
    });
    this.getPubliction();
  }

  findUser(id: any) {
    this.authserv.findUserById(id).subscribe((data) => {
      console.log("winner winner", data);
    });
  }

  async getPubliction() {
    this.publicationService.getPost().subscribe(async (data) => {
      this.List = await data;
      // console.log("for you list post : ", this.List);
      for (let item of this.List) {
        let imageforpub = [];
        for (let itam of item.img) {
          // console.log("image :", itam);
          this.publicationService
            .getImage(itam.idimg)
            .subscribe(async (data) => {
              // console.log("image itam  : ", data);
              const imageDataUrl = buffer.Buffer.from(
                data["img"]["data"]["data"]
              ).toString("base64");
              const safeUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(
                `data:data:image/png;base64,${imageDataUrl}`
              );
              imageforpub.push({ _id: data["_id"], safeUrl: safeUrl });
            });
        }
        // console.log("imageforpub : ", imageforpub);
        this.Listimage.push({ idpub: item._id, listimage: imageforpub });
      }
      // console.log("listimagefor toute pub : ", this.Listimage);
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
    const data = { publicationId: id, UserId: 0 };
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
  achraf() {
    return "hello";
  }
}
