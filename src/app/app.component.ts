import {
  Component,
  OnInit,
  Renderer2,
  HostListener,
  Inject,
} from "@angular/core";
import { Location } from "@angular/common";
import { DOCUMENT } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
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
  }

  // findUserById(id) {
  //   return this.http.get(`http://localhost:5000/user/getUserById/${id}`).pipe(
  //     map((response) => {
  //       console.log("res user", response);

  //       return response;
  //     })
  //   );
  // }

  // getLoggedInUser() {
  //   const token = localStorage.getItem("token");

  //   if (token) {
  //     const payload = JSON.parse(atob(token.split(".")[1]));
  //     console.log(payload.userId);

  //     this.findUserById(payload.userId).subscribe(
  //       (user) => {
  //         console.log("Logged in user:", user);
  //         this.loggedInUser = user;
  //       },
  //       (error) => {
  //         console.error("Error retrieving user:", error);
  //         this.loggedInUser = null;
  //       }
  //     );
  //   } else {
  //     this.loggedInUser = null;
  //   }
  // }
}
