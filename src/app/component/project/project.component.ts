import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { AuthentificationService } from "src/app/services/authentification.service";
import { ProjectService } from "src/app/services/project.service";
import { PublicationService } from "src/app/services/publication.service";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import * as buffer from "buffer";
import { LoggedInUserService } from "src/app/services/logged-in-user.service";
@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProjectComponent implements OnInit {
  projects = [];
  projectsCopy = [];
  Listimage = [];
  ListCopy = [];
  idUser: any;
  nombreVueProject: number = 0;
  @Input() source: string;
  @Input() idprofile: string;
  @Output() coutVueProjectReply = new EventEmitter<number>();

  constructor(
    private projectService: ProjectService,
    private authserv: AuthentificationService,
    private sanitizer: DomSanitizer,
    private ref: ChangeDetectorRef,
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
          this.nombreVueProject += await item["vueNumber"];
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
      this.coutVueProjectReply.emit(this.nombreVueProject);
      this.ref.detectChanges();
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
          this.nombreVueProject++;
          this.coutVueProjectReply.emit(this.nombreVueProject);
          await item["vueUsers"].push({ id: this.idUser });
          this.projectService
            .updateVueProject(item["_id"], item["vueNumber"], item["vueUsers"])
            .subscribe((res) => {
              console.log(res);
            });
          this.ref.detectChanges();
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
