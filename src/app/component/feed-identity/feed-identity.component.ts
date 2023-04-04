import { Component, OnInit } from "@angular/core";
import { LoggedInUserService } from "src/app/services/logged-in-user.service";

@Component({
  selector: "app-feed-identity",
  templateUrl: "./feed-identity.component.html",
  styleUrls: ["./feed-identity.component.scss"],
})
export class FeedIdentityComponent implements OnInit {
  loggedInUser: any;

  idUser: any;
  constructor(private loggedUserServ: LoggedInUserService) {
    this.idUser = this.loggedUserServ.getUserID();
  }

  ngOnInit(): void {
    this.loggedUserServ.findUserById(this.idUser).subscribe((res) => {
      this.loggedInUser = res;
      console.log(this.loggedInUser);
    });
  }
}
