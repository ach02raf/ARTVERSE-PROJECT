import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { AuthentificationService } from "src/app/services/authentification.service";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  loggedInUser: any;
  user: any;
  id: any;

  idUser: any;
  username: any;

  constructor(
    private authServ: AuthentificationService,
    private userServ: UserService,
    private route: ActivatedRoute
  ) {
    this.idUser = this.authServ.getUserID();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.username = params.get("username");
    });
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
    this.authServ.findUserById(this.idUser).subscribe((res) => {
      this.loggedInUser = res;
      console.log(this.loggedInUser);
    });

    this.userServ.findUserByUsername(this.username).subscribe((res) => {
      this.user = res;
      console.log("username load", this.user);
    });
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }
}
