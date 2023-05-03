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
  Abonnes: any;
  Abonnements: any;
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

    console.log(this.loggedInUser);

    this.userServ.findUserByUsername(this.username).subscribe((res) => {
      this.user = res;
      this.Abonnements = this.user["followers"].length;
      console.log("username load", this.user);
    });
  }
}
