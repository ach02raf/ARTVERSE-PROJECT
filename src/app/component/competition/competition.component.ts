import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { AuthentificationService } from "src/app/services/authentification.service";
import { SinglesService } from "src/app/services/singles.service";
import { PublicationService } from "src/app/services/publication.service";
import { ModalDirective } from "ngx-bootstrap/modal";
import { LoggedInUserService } from "src/app/services/logged-in-user.service";


import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import * as buffer from "buffer";

interface Image {
  name: string;
  file: File;
  url: SafeUrl;
}

@Component({
  selector: "app-competition",
  templateUrl: "./competition.component.html",
  styleUrls: ["./competition.component.scss"],
})
export class CompetitionComponent implements OnInit {
  idUser: any;
  id: any;
  constructor(
    private authserv: AuthentificationService,
    private singlesService: SinglesService,
    private publicationService: PublicationService,
    private sanitizer: DomSanitizer,
    private loggedUserServ: LoggedInUserService
  ) {
    this.idUser = this.loggedUserServ.getUserID();
  }
  challenges = [];
  Listimage = [];
  @ViewChild("myModal") myModal: ModalDirective;
  images: Image[] = [];
  challengesData = [];

  challengeWithWinner = [];
  challengeWithOutWinner = [];
   
  

 
  ngOnInit(): void {
    this.getchanlleng();

  }

  getImage(idimage: any, idpub: any) {
    for (let item of this.Listimage) {
      if (item.idChallenge === idpub) {
        for (let itam of item.listimage) {
          if (itam._id === idimage) {
            return itam.safeUrl;
          }
        }
      }
    }
  }
  getchanlleng() {
    this.singlesService.get_chanllenge().subscribe(async (data) => {
      this.challengesData = await data;
      for (let item of this.challengesData) {
        if (item['winner']){
          this.authserv.findUserById(item['winner']).subscribe((data) => {
            this.challenges.push({ ...item, winnersData: data });
          });
    
        }else{
          this.challengeWithOutWinner.push(item);

        }
      }
      for (let item of this.challengesData) {
        let imageforpub = [];
        for (let itam of item["image"]) {
          this.publicationService
            .getImage(itam["idimg"])
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
          idChallenge: item["_id"],
          listimage: imageforpub,
        });
      } 
    });
  }

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

  reactioncount(list: any) {
    return list.length;
  }

  onFileSelected(event: any): void {
    event.preventDefault(); // empêche le rafraîchissement de la page
    const files = event.target.files;
    for (const file of files) {
      const url = URL.createObjectURL(file);
      const safeUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
      const image: Image = {
        name: file.name,
        file: file,
        url: safeUrl,
      };
      this.images.push(image);
    }
  }

  clearSelectedImage(index: any) {
    this.images.splice(index, 1);
  }

  onSubmit() {
    const formData = new FormData();

    formData.append("Id_user", this.idUser);
    formData.append("Id_publiction", this.id);
    this.images.forEach((image) => formData.append("images", image.file));

    this.singlesService.send_chanllenge(formData).subscribe(
      (response) => {
        // handle response from the API

        this.images = [];

        this.myModal.hide();
      },
      (error) => {
        console.error("err", error);
        // handle error from the API
        alert("you trying to use image ");
        return;
      }
    );
  }

  openModale(id: any) {
    this.id = id;
    this.myModal.show();
  }
}
