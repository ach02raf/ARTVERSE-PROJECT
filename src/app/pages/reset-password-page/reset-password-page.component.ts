import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthentificationService } from "src/app/services/authentification.service";

@Component({
  selector: "app-reset-password-page",
  templateUrl: "./reset-password-page.component.html",
  styleUrls: ["./reset-password-page.component.scss"],
})
export class ResetPasswordPageComponent implements OnInit {
  token: String;
  newPasswd: String;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthentificationService,
    private routee: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.token = params.get("token");
    });

    // console.log("this.token", this.token);
  }

  resetPasswd() {
    this.authService.resetPassword(this.token, this.newPasswd).subscribe({
      next: (res) => {
        console.log("res result", res);
        this.routee.navigate(["/home"]);
      },
      error: (err) => {
        console.log("the err", err);
      },
    });
  }
}
