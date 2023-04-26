import { Component, Input, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";
import { AuthentificationService } from "src/app/services/authentification.service";
import { LoggedInUserService } from "src/app/services/logged-in-user.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  loggedInUser: any;
  idUser: any;
  constructor(
    private authServ: AuthentificationService,
    private loggedUserServ: LoggedInUserService,
    private route: Router
  ) {
    this.idUser = this.loggedUserServ.getUserID();
  }

  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  Deconnexion() {
    this.authServ.logout();
    this.loggedInUser = null;
    this.route.navigate(["/home"]);
  }

  ngOnInit(): void {
    this.loggedUserServ.findUserById(this.idUser).subscribe((res) => {
      this.loggedInUser = res;
      console.log("logged navbar", this.loggedInUser);
    });
  }
}
