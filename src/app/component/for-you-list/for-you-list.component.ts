import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { PublicationService } from "../../services/publication.service";
import { LoggedInUserService } from "src/app/services/logged-in-user.service";

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
  constructor(
    private publicationService: PublicationService,
    private loggedUserServ: LoggedInUserService,
    private ref: ChangeDetectorRef
  ) {
    this.idUser = this.loggedUserServ.getUserID();
  }

  public commentText: string;
  idUser: any;

  ngOnInit(): void {
    this.ref.detectChanges();
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
    const data = { publicationId: id, UserId: this.idUser };
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
}
