import { Component, OnInit, ViewChild } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { ModalDirective } from "ngx-bootstrap/modal";
import { PublicationService } from "../../services/publication.service";
import { LoggedInUserService } from "src/app/services/logged-in-user.service";
import { ElementRef } from "@angular/core";
import { ProjectService } from "../../services/project.service";
import { SinglesService } from "../../services/singles.service";
// selector

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FormBuilder, Validators } from "@angular/forms";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
interface Image {
  name: string;

  file: File;
  url: SafeUrl;
}
@Component({
  selector: "app-add-project-modal",
  templateUrl: "./add-project-modal.component.html",
  styleUrls: ["./add-project-modal.component.scss"],
})
export class AddProjectModalComponent implements OnInit {
  @ViewChild("myModal") myModal: ModalDirective;
  @ViewChild("myModal2") myModal2: ModalDirective;
  @ViewChild("myModal3") myModal3: ModalDirective;
  @ViewChild("myModal4") myModal4: ModalDirective;
  images: Image[] = [];
  hashtags = [];
  isModalVisible = true;
  invalide = false;
  isCopyrightChecked: boolean = false;
  postTextElement: HTMLElement | null;
  idUser: any;
  Message: String = "";
  loggedInUser: any;
  tabbleauHashtag = [];
  tabbleauTools = [];
  inputValueSingle: String;

  inputValueHashtag: string;
  inputValueTools: string;
  selectedCategory: string;
  @ViewChild("titre") titre: ElementRef;
  category = ["VFX", "3D", "Illustration", "Photography"];
  constructor(
    public fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private elementRef: ElementRef,
    private loggedUserServ: LoggedInUserService,
    private publicationService: PublicationService,
    private projectService: ProjectService,
    private singlesService: SinglesService
  ) {
    this.idUser = this.loggedUserServ.getUserID();
  }

  isSubmitted = false;

  ngOnInit(): void {
    this.loggedUserServ.findUserById(this.idUser).subscribe((res) => {
      this.loggedInUser = res;
      console.log("test methode init", this.inputValueHashtag);
    });

    console.log("test maha 2", this.idUser);

    this.getHashtag();
    this.postTextElement = document.querySelector(".form-control.inputtag");
  }

  getHashtag() {
    this.publicationService.getMyHashtag().subscribe((data) => {
      this.hashtags = data;
    });
  }
  test(data: any) {
    console.log("test methode", data);
  }

  onFileSelected(event: any): void {
    event.preventDefault(); // empêche le rafraîchissement de la page
    const files = event.target.files;
    for (const file of files) {
      const url = URL.createObjectURL(file);
      const safeUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
      const image: Image = {
        name: file.name,
        file: file,
        url: safeUrl,
      };
      this.images.push(image);
    }
    console.log(this.images);
  }

  clearSelectedImage(index: any) {
    this.images.splice(index, 1);
  }

  // hashtag manuplation

  addHashtagg(inpu: string) {
    const hashtags = inpu.split(" ");

    hashtags.forEach((hashtag) => {
      if (
        hashtag.trim() !== "" &&
        this.tabbleauHashtag.indexOf(hashtag.trim()) === -1
      ) {
        this.tabbleauHashtag.push(hashtag.trim());
      }
    });

    this.inputValueHashtag = "";
  }
  removeHashtag(hash: string) {
    const index = this.tabbleauHashtag.indexOf(hash);
    console.log("innnddd", index);

    if (index !== -1) {
      this.tabbleauHashtag.splice(index, 1);
    }
  }

  addTools(inpu: string) {
    console.log("value", inpu);

    console.log("index", this.tabbleauTools.indexOf(inpu));

    if (this.tabbleauTools.indexOf(inpu) == -1) {
      this.tabbleauTools.push(inpu);
    }

    console.log(this.tabbleauTools);
  }

  removeTools(hash: string) {
    const index = this.tabbleauTools.indexOf(hash);
    if (index !== -1) {
      this.tabbleauTools.splice(index, 1);
    }
  }

  displayValue(value: any) {
    console.log("value 2", value);
  }

  registrationForm = this.fb.group({
    categoryName: ["", [Validators.required]],
  });
  changecategory(e: any) {
    this.categoryName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  // Access formcontrols getter
  get categoryName() {
    return this.registrationForm.get("categoryName");
  }
  onSubmit(): void {
    console.log(this.registrationForm.value.categoryName);
    console.log("ttols;", this.tabbleauTools);
    console.log("tag;", this.tabbleauHashtag);
    console.log("titr :", this.titre.nativeElement.value);
    console.log("image : ", this.images);

    if (this.titre.nativeElement.value == "") {
      this.Message = "choisissez un titre";
    } else if (this.registrationForm.value.categoryName === "") {
      this.Message = "choisissez un category";
    } else if (this.tabbleauHashtag.length < 1) {
      this.Message = "choisissez au moins un hashtag";
    } else if (this.tabbleauTools.length < 1) {
      this.Message = "choisissez au moins un Tools";
    } else if (this.images.length < 1) {
      this.Message = "choisissez au moins une image";
    } else {
      const formData = new FormData();

      formData.append("Id_user", this.idUser);
      formData.append("titre", this.titre.nativeElement.value);
      formData.append("catg", this.registrationForm.value.categoryName);

      if (this.tabbleauHashtag.length === 1) {
        formData.append("hashtags", this.tabbleauHashtag[0]);
      } else {
        this.tabbleauHashtag.forEach((tag) => {
          formData.append("hashtags", tag);
        });
      }

      if (this.tabbleauTools.length === 1) {
        formData.append("tools", this.tabbleauTools[0]);
      } else {
        this.tabbleauTools.forEach((tag) => {
          formData.append("tools", tag);
        });
      }

      this.images.forEach((image) => formData.append("images", image.file));

      this.projectService.createProject(formData).subscribe(
        (response) => {
          console.log("ok", response);

          this.myModal.hide();
          this.myModal2.show();
        },
        (error) => {
          this.invalide = true;
          console.error("err", error);
          // handle error from the API
          this.myModal.hide();
          this.myModal3.show();

          alert("you trying to use image ");
          return;
        }
      );
    }
  }

  onInputChange() {
    this.Message = "hi";
  }

  openSinaler() {
    this.myModal3.hide();
    this.myModal4.show();
  }

  onSubmit_Single() {
    console.log(this.inputValueSingle);

    this.singlesService
      .send_single({ Id_user: this.idUser, text: this.inputValueSingle })
      .subscribe(
        (response) => {
          console.log("ok", response);

          this.myModal4.hide();
        },
        (error) => {
          alert("try agine ");
          return;
        }
      );
  }
}
