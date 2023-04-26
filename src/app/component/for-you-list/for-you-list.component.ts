import { Component, OnInit } from "@angular/core";
import { PublicationService } from "../../services/publication.service";
import { LoggedInUserService } from "src/app/services/logged-in-user.service";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
//import { DatePipe } from '@angular/common';

import * as buffer from "buffer";
@Component({
  selector: "app-for-you-list",
  templateUrl: "./for-you-list.component.html",
  styleUrls: ["./for-you-list.component.scss"],
})
export class ForYouListComponent implements OnInit {
  constructor(
    // private datePipe: DatePipe ,
    private publicationService: PublicationService,
    private loggedUserServ: LoggedInUserService,
    private sanitizer: DomSanitizer
  ) {
    this.idUser = this.loggedUserServ.getUserID();
  }
  imageData: any;
  List = [];
  public commentText: string;
  loggedInUser: any;
  public isCollapsed: boolean[] = [];
  Listimage = [];
  idUser: any;

  ngOnInit(): void {
    this.loggedUserServ.findUserById(this.idUser).subscribe((res) => {
      this.loggedInUser = res;
      // console.log("foryoulist", this.loggedInUser);
    });

    this.getPubliction();
  }

  async getPubliction() {
    this.publicationService.getPost().subscribe(async (data) => {
      this.List = await data;
      this.List.forEach((item) => {
        this.isCollapsed[item._id] = true;
      });
      console.log("for you list post : ", this.List);
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
  achraf() {
    return "hello";
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
}
