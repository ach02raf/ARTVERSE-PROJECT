import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { AuthentificationService } from "src/app/services/authentification.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  loggedInUser: any;

  idUser: any;
  constructor(private authServ: AuthentificationService) {
    this.idUser = this.authServ.getUserID();
  }

  ngOnInit(): void {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
    this.authServ.findUserById(this.idUser).subscribe((res) => {
      this.loggedInUser = res;
      console.log(this.loggedInUser);
    });
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }
}
