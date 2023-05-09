import { Component, Input, OnInit } from "@angular/core";
import { AuthentificationService } from "src/app/services/authentification.service";
import { ProjectService } from "src/app/services/project.service";
import { PublicationService } from "src/app/services/publication.service";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import * as buffer from "buffer";
import { LoggedInUserService } from "src/app/services/logged-in-user.service";
import { log } from "console";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
  projects = [];
  projectsCopy = [];
  Listimage = [];
  ListCopy = [];
  idUser: any;
  @Input() source: string;
  @Input() idprofile: string;

  constructor(
    private projectService: ProjectService,
    private authserv: AuthentificationService,
    private sanitizer: DomSanitizer,
    private publicationService: PublicationService,
    private loggedUserServ: LoggedInUserService
  ) {
    this.idUser = this.loggedUserServ.getUserID();
  }

  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(async (data) => {
      this.projects = await data;

      for (let item of data) {
        let shouldAddItem = true;

        if (this.source === "profile" && item["Id_user"] !== this.idprofile) {
          shouldAddItem = false;
        }

        if (shouldAddItem) {
          this.authserv.findUserById(item.Id_user).subscribe((userData) => {
            let countReaction = item["reaction"].length;
            let coutCommentaire = item["commentaires"].length;
            let itemCopy = {
              ...item,
              userData,
              countReaction,
              coutCommentaire,
            };
            this.projectsCopy.push(itemCopy);
            console.log(
              "test user aman",
              this.projectsCopy[0]["userData"]["firstname"]
            );

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
    });
  }
  async vueCompt(project: any) {
    for (let item of this.projectsCopy) {
      if (item["_id"] === project["_id"]) {
        let verif: boolean = true;
        for (let itam of item["vueUsers"]) {
          if (itam["id"] === this.idUser) {
            verif = false;
          }
        }
        if (verif) {
          item["vueNumber"]++;
          await item["vueUsers"].push({ id: this.idUser });
          this.projectService
            .updateVueProject(item["_id"], item["vueNumber"], item["vueUsers"])
            .subscribe((res) => {
              console.log(res);
            });
        }
      }
    }
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
