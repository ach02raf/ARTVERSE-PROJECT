import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { AuthentificationService } from "src/app/services/authentification.service";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute } from "@angular/router";
import { PublicationService } from "src/app/services/publication.service";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import * as buffer from "buffer";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProfileComponent implements OnInit {
  isCollapsed = true;
  loggedInUser: any;
  user: any;
  id: any;
  source: any = "profile";
  username: any;
  followers: any;
  following: any;
  showfollow: boolean = true;
  followBtn: any = "Follow";
  List = [];
  ListCopy = [];
  Listimage = [];
  isCollapsedProfile: boolean[] = [];
  coutReationPublication: number = 0;
  countVueProject: number = 0;
  constructor(
    private authServ: AuthentificationService,
    private userServ: UserService,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private publicationService: PublicationService,
    private sanitizer: DomSanitizer
  ) {
    this.loggedInUser = this.authServ.getUserID();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.username = params.get("username");
    });
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");

    this.userServ.findUserByUsername(this.username).subscribe(async (res) => {
      this.user = res;
      this.following = await res["following"].length;
      this.followers = await res["followers"].length;
      for (let element of this.user["followers"]) {
        if (element["id"] === this.loggedInUser) {
          this.showfollow = false;
          this.followBtn = "Following";
        }
      }
      await this.getPubliction();
    });
    this.ref.detectChanges();
  }

  getcoutReationPublicationReply(message: number) {
    this.coutReationPublication = message;
    this.ref.detectChanges();
  }
  getcoutVueProjectReply(message: number) {
    this.countVueProject = message;
    this.ref.detectChanges();
  }

  async getPubliction() {
    this.publicationService.getPost().subscribe(async (data) => {
      this.List = await data;

      for (let item of data) {
        let shouldAddItem = true;
        if (item["Id_user"] !== this.user["_id"]) {
          shouldAddItem = false;
        }

        if (shouldAddItem) {
          this.coutReationPublication += await item["reaction"].length;
          this.isCollapsedProfile[item._id] = true;
          this.authServ.findUserById(item.Id_user).subscribe((userData) => {
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
      this.ref.detectChanges();
    });
  }
  followUser(id: any) {
    this.userServ
      .updatefollow({ id: this.loggedInUser, idprofile: id })
      .subscribe(() => {
        this.showfollow = !this.showfollow;
        this.followBtn = "Following";
        this.followers++;
        this.ref.detectChanges();
      });
  }
  unfollowUser(id: any) {
    this.userServ
      .removefollow({ id: this.loggedInUser, idprofile: id })
      .subscribe(() => {
        this.showfollow = !this.showfollow;
        this.followBtn = "Follow";
        this.followers--;
        this.ref.detectChanges();
      });
  }
}
