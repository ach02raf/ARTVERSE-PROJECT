import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthentificationService } from "src/app/services/authentification.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit {
  @ViewChild("forgotPasswordModal") forgotPasswordModal!: ElementRef;

  pswd: string;
  email: string;
  resetByEmail: string;
  cnxForm: FormGroup;
  isSubmitted = false;

  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  userData: { password: string; email: string };
  constructor(
    private authServ: AuthentificationService,
    private route: Router,
    private modalService: NgbModal
  ) {
    this.initializeForm();
  }

  showForgotPasswordModal() {
    this.modalService.open(this.forgotPasswordModal, { centered: true });
  }

  ngOnInit(): void {
    this.resetByEmail = this.email;
  }
  initializeForm() {
    this.cnxForm = new FormGroup({
      password: new FormControl(this.pswd, [Validators.required]),
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  resetPasswd() {
    console.log(this.resetByEmail);
    this.authServ.sendMailResetPassword(this.resetByEmail).subscribe(
      (response) => {
        console.log("Success", response);
        this.route.navigate(["/home"]);
        // Handle success case here
      },
      (error) => {
        console.log("this.resetByEmail", this.resetByEmail);

        console.log("Error", error);
        // Handle error case here
      }
    );
  }

  cnx() {
    this.userData = {
      password: this.pswd,
      email: this.email,
    };
    this.isSubmitted = true;

    if (this.cnxForm.invalid) {
      return false;
    } else {
      this.authServ.login(this.userData).subscribe(
        (res) => {
          // console.log("res result", res);
          localStorage.setItem("token", res);
          this.route.navigate(["/home"]);
        },
        (err) => {
          console.log("the err", err);
        }
      );
    }
  }
}
