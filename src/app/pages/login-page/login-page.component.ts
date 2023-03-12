import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AuthentificationService } from "src/app/services/authentification.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit {
  password: string;
  email: string;
  cnxForm: FormGroup;
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  usereData: { password: string; email: string };
  constructor(private authServ: AuthentificationService) {
    this.initializeForm();
  }
  initializeForm() {
    this.cnxForm = new FormGroup({
      password: new FormControl(),
      email: new FormControl(),
    });
  }
  cnx() {
    this.usereData = {
      password: this.password,
      email: this.email,
    };
    this.authServ.login(this.usereData).subscribe(
      (res) => {
        console.log("res result", res);

        localStorage.setItem("token", res);
      },
      (err) => {
        console.log("the err", err);
      }
    );
  }

  ngOnInit(): void {}
}
