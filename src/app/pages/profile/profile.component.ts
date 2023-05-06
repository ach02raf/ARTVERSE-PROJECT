import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { AuthentificationService } from "src/app/services/authentification.service";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  constructor(
    private authServ: AuthentificationService,
    private userServ: UserService,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute
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
