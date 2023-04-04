import { Component, Input, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";
import { AuthentificationService } from "src/app/services/authentification.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  @Input() loggedInUser: any;
  constructor(
    private authServ: AuthentificationService,
    private route: Router
  ) {}

  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  Deconnexion() {
    this.authServ.logout();
    this.route.navigate(["/home"]);
  }

  ngOnInit(): void {}
}
