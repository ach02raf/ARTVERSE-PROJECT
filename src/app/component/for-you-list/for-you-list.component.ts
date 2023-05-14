import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  ViewChild,
  OnInit,
  Output,
  EventEmitter,
} from "@angular/core";
import { PublicationService } from "../../services/publication.service";
import { LoggedInUserService } from "src/app/services/logged-in-user.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SinglesService } from "src/app/services/singles.service";
@Component({
  selector: "app-for-you-list",
  templateUrl: "./for-you-list.component.html",
  styleUrls: ["./for-you-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ForYouListComponent implements OnInit {
  @Input() ListCopy: any;
  @Input() Listimage: any;
  @Input() isCollapsed: boolean[] = [];
  @Input() coutReationPublication: number;
  @Output() coutReationPublicationReply = new EventEmitter<number>();
  @ViewChild("modalContent", { static: true }) modalContent: any;
  constructor(
    private publicationService: PublicationService,
    private loggedUserServ: LoggedInUserService,
    private ref: ChangeDetectorRef,
    private modalService: NgbModal,
    private singlesService: SinglesService
  ) {
    this.idUser = this.loggedUserServ.getUserID();
  }

  public commentText: string;
  idUser: any;
  repostReason: string;
  repostComments: string;
  text: String;
  itemId: string;
  ngOnInit(): void {}
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

  async likePost(id: number) {
    const data = { publicationId: id, UserId: this.idUser };
    this.publicationService.Reaction(data).subscribe(() => {
      this.ref.detectChanges();
    });
    for (let element of this.ListCopy) {
      if (element["_id"] === id) {
        if (element["reaction"].length === 0) {
          await element["reaction"].push({ idUser: this.idUser });
          this.ref.detectChanges();
        } else {
          let exist: boolean = false;
          for (let item of element["reaction"]) {
            if (item["idUser"] === this.idUser) {
              exist = true;
            }
          }
          if (exist) {
            const index = await element["reaction"].findIndex(
              (itam) => itam["idUser"] === this.idUser
            );
            let value = this.coutReationPublication;
            value--;
            this.coutReationPublicationReply.emit(value);
            await element["reaction"].splice(index, 1);
          } else {
            let value = this.coutReationPublication;
            value++;
            this.coutReationPublicationReply.emit(value);
            await element["reaction"].push({ idUser: this.idUser });
          }
          this.ref.detectChanges();
        }
      }
    }
  }

  // Dislike a post
  reaction(list: any) {
    const reactionIndex = list.findIndex(
      (reaction) => reaction.idUser === this.idUser
    );

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
    if (this.repostReason !== "Other") {
      console.log("Repost reason:", this.repostReason);
      this.text = this.repostReason;
    } else {
      console.log(
        "Repost reason:",
        this.repostReason,
        "Repost comments:",
        this.repostComments
      );
      this.text = this.repostComments;
    }

    this.singlesService
      .send_single_pub({
        iduser: this.idUser,
        text: this.text,
        idpubliction: this.itemId,
      })
      .subscribe(
        (response) => {
          console.log("ok", response);

          this.modalService.dismissAll(this.modalContent);
          alert("your alert has been send ");
          return;
        },
        (error) => {
          const modalRef = this.modalService.dismissAll;
          alert("try agine ");
          return;
        }
      );
  }

  deletePost(id: any) {
    this.publicationService
      .deleteMyPubliction({ id: id })
      .subscribe(async (data) => {
        const index = await this.ListCopy.findIndex(
          (itam) => itam["_id"] === id
        );
        await this.ListCopy.splice(index, 1);
        this.ref.detectChanges();
        alert("Post  has been deleted");
      });
  }
}
