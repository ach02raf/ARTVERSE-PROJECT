import { Component, OnInit } from "@angular/core";
import { AuthentificationService } from "src/app/services/authentification.service";

@Component({
  selector: "app-feed-identity",
  templateUrl: "./feed-identity.component.html",
  styleUrls: ["./feed-identity.component.scss"],
})
export class FeedIdentityComponent implements OnInit {
  loggedInUser: any;

  idUser: any;
  constructor(private authServ: AuthentificationService) {
    this.idUser = this.authServ.getUserID();
  }

  ngOnInit(): void {
    this.authServ.findUserById(this.idUser).subscribe((res) => {
      this.loggedInUser = res;
      console.log(this.loggedInUser);
    });
  }
}
