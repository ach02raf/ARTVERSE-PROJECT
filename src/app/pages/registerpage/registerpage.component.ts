import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthentificationService } from "src/app/services/authentification.service";

@Component({
  selector: "app-registerpage",
  templateUrl: "registerpage.component.html",
  providers: [AuthentificationService],
})
export class RegisterpageComponent implements OnInit, OnDestroy {
  password: String;
  email: String;
  bio: String;
  firstname: String;
  lastname: String;
  isSubmitted = false;
  inscriptionForm: FormGroup;
  focus;
  focus1;
  focus2;
  focus3;
  focus4;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private authServ: AuthentificationService
  ) {
    this.initializeForm();
  }
  initializeForm() {
    this.inscriptionForm = new FormGroup({
      password: new FormControl(this.password, [Validators.required]),
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email,
      ]),
      bio: new FormControl(this.bio, [Validators.required]),
      firstname: new FormControl(this.firstname, [Validators.required]),
      lastname: new FormControl(this.lastname, [Validators.required]),
    });
  }

  inscri() {
    let user = {
      password: this.password,
      email: this.email,
      bio: this.bio,
      firstname: this.firstname,
      lastname: this.lastname,
    };
    this.isSubmitted = true;
    if (this.inscriptionForm.invalid) {
      return false;
    } else {
      this.authServ.inscriptionPost(user).subscribe(
        (res) => {
          this.route.navigate(["/profile"]);

          localStorage.setItem("token", res);
        },
        (err) => {
          console.log("the err", err);
        }
      );
    }
  }
  // @HostListener("document:mousemove", ["$event"])
  // onMouseMove(e) {
  //   var squares1 = document.getElementById("square1");
  //   var squares2 = document.getElementById("square2");
  //   var squares3 = document.getElementById("square3");
  //   var squares4 = document.getElementById("square4");
  //   var squares5 = document.getElementById("square5");
  //   var squares6 = document.getElementById("square6");
  //   var squares7 = document.getElementById("square7");
  //   var squares8 = document.getElementById("square8");

  //   var posX = e.clientX - window.innerWidth / 2;
  //   var posY = e.clientY - window.innerWidth / 6;

  //   squares1.style.transform =
  //     "perspective(500px) rotateY(" +
  //     posX * 0.05 +
  //     "deg) rotateX(" +
  //     posY * -0.05 +
  //     "deg)";
  //   squares2.style.transform =
  //     "perspective(500px) rotateY(" +
  //     posX * 0.05 +
  //     "deg) rotateX(" +
  //     posY * -0.05 +
  //     "deg)";
  //   squares3.style.transform =
  //     "perspective(500px) rotateY(" +
  //     posX * 0.05 +
  //     "deg) rotateX(" +
  //     posY * -0.05 +
  //     "deg)";
  //   squares4.style.transform =
  //     "perspective(500px) rotateY(" +
  //     posX * 0.05 +
  //     "deg) rotateX(" +
  //     posY * -0.05 +
  //     "deg)";
  //   squares5.style.transform =
  //     "perspective(500px) rotateY(" +
  //     posX * 0.05 +
  //     "deg) rotateX(" +
  //     posY * -0.05 +
  //     "deg)";
  //   squares6.style.transform =
  //     "perspective(500px) rotateY(" +
  //     posX * 0.05 +
  //     "deg) rotateX(" +
  //     posY * -0.05 +
  //     "deg)";
  //   squares7.style.transform =
  //     "perspective(500px) rotateY(" +
  //     posX * 0.02 +
  //     "deg) rotateX(" +
  //     posY * -0.02 +
  //     "deg)";
  //   squares8.style.transform =
  //     "perspective(500px) rotateY(" +
  //     posX * 0.02 +
  //     "deg) rotateX(" +
  //     posY * -0.02 +
  //     "deg)";
  // }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");

    // this.onMouseMove(event);
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }
}
