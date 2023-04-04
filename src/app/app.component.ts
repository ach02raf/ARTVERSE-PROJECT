import {
  Component,
  OnInit,
  Renderer2,
  HostListener,
  Inject,
} from "@angular/core";
import { Location } from "@angular/common";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    public location: Location,
    @Inject(DOCUMENT) document
  ) {}
  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    if (window.pageYOffset > 100) {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.remove("navbar-transparent");
        element.classList.add("bg-default");
      }
    } else {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.add("navbar-transparent");
        element.classList.remove("bg-default");
      }
    }
  }
  loggedInUser: any;
  ngOnInit() {
    this.onWindowScroll(event);
    this.getLoggedInUser();
  }

  getLoggedInUser() {
    const token = localStorage.getItem("token");
    // console.log(token["email"]);

    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      this.loggedInUser = {
        id: payload.userId,
        email: payload.email,

        // add any additional user properties here
      };
      console.log(payload);

      console.log(payload.userId);
    } else {
      this.loggedInUser = null;
    }
  }
}
