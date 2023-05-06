import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from "@angular/core";
import { PublicationService } from "../../services/publication.service";
import { LoggedInUserService } from "src/app/services/logged-in-user.service";
import { AuthentificationService } from "src/app/services/authentification.service";

@Component({
  selector: "app-add-comment",
  templateUrl: "./add-comment.component.html",
  styleUrls: ["./add-comment.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AddCommentComponent implements OnInit {
  @Input() idPub: any;
  @Input() listComm: any;

  loggedInUser: any;
  user: any;
  users: any;

  listCommentaire: any = [];

  idUser: any;
  constructor(
    private loggedUserServ: LoggedInUserService,
    private publicationService: PublicationService,
    private cdf: ChangeDetectorRef,
    private authserv: AuthentificationService
  ) {
    this.idUser = this.loggedUserServ.getUserID();
  }

  ngOnInit(): void {
    console.log("test maha", this.idUser);
    // this.user = this.authserv.findUserById(this.listComm[0].idUser);
    this.listComm.forEach((com) => {
      // com["idUser"].forEach((id) => {
      //   // this.user = this.authserv.findUserById(id);
      //   console.log("yoyoyo", id);
      // });
      this.authserv.findUserById(com["idUser"]).subscribe((data) => {
        console.log("user winner", data);

        this.listCommentaire.push({ ...com, userData: data });
        console.log("list with users", this.listCommentaire);
      });
      console.log("comyosb5", com["idUser"]);
      this.authserv.findUserById(com["idUser"]).subscribe((data) => {
        console.log("uss data", data);
      });

      console.log("usss", this.authserv.findUserById(com["idUser"]));
    });
  }

  findUser(id) {
    this.authserv.findUserById(id).subscribe((data) => {
      console.log("uss data", data[0]);
    });
  }

  postComment(comment: string) {
    console.log(comment);
    // or do something else with the comment value
    this.publicationService
      .addcomment({
        comm: comment,
        idPub: this.idPub,
        iduser: this.idUser,
      })
      .subscribe(
        (response) => {
          console.log("ok", response);
          this.cdf.detectChanges();

          // handle response from the API
          comment = "";
        },
        (error) => {
          console.error("err", error);
          // handle error from the API
        }
      );
  }

  reactionComm(index: any) {
    this.publicationService
      .addcommentreaction({
        commindex: index,
        idPub: this.idPub,
        iduser: this.idUser,
      })
      .subscribe(
        (response) => {
          console.log("ok", response);
        },
        (error) => {
          console.error("err", error);
          // handle error from the API
        }
      );
  }

  postCommentReply(comment: HTMLTextAreaElement, index: any) {
    this.publicationService
      .addcommentReply({
        commindex: index,
        idPub: this.idPub,
        iduser: this.idUser,
        reply: comment.value,
      })
      .subscribe(
        (response) => {
          console.log("ok", response);
        },
        (error) => {
          console.error("err", error);
          // handle error from the API
        }
      );
  }
}
