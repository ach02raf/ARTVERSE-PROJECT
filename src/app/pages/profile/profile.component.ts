import { Component, OnInit } from "@angular/core";
import { AuthentificationService } from "src/app/services/authentification.service";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
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
  constructor(
    private authServ: AuthentificationService,
    private userServ: UserService,
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

    this.userServ.findUserByUsername(this.username).subscribe((res) => {
      this.user = res;
      this.following = this.user["following"].length;
      this.followers = this.user["followers"].length;
      for (let element of this.user["followers"]) {
        if (element["id"] === this.loggedInUser) {
          this.showfollow = false;
        }
      }
    });
  }

  followUser(id: any) {
    this.userServ
      .updatefollow({ id: this.loggedInUser, idprofile: id })
      .subscribe((res) => {
        console.log(res);
        this.showfollow = !this.showfollow;
      });
  }
  unfollowUser(id: any) {
    console.log("hello unfollow !", id);
  }
}
