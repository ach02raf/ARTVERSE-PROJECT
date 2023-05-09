import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild,
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
  @ViewChild("commentInput") input: ElementRef<HTMLInputElement>;

  loggedInUser: any;
  user: any;
  users: any;

  listCommentaire = [];

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
    this.listComm.forEach((com) => {
      this.authserv.findUserById(com["idUser"]).subscribe((data) => {
        this.listCommentaire.push({ ...com, userData: data });
      });
    });
    this.findUser(this.idUser);
  }

  findUser(id) {
    this.authserv.findUserById(id).subscribe((data) => {
      this.user = data;
    });
  }

  postComment(comment: string) {
    this.publicationService
      .addcomment({
        comm: comment,
        idPub: this.idPub,
        iduser: this.idUser,
      })
      .subscribe(
        async (response) => {
          await this.listCommentaire.push({
            comment: comment,
            idPub: this.idPub,
            iduser: this.idUser,
            reaction: 0,
            comments: [],
            userData: this.user,
          });
          await this.listComm.push({
            comment: comment,
            idPub: this.idPub,
            iduser: this.idUser,
            reaction: 0,
            comments: [],
          });
          this.input.nativeElement.value = "";
          this.cdf.detectChanges();
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
