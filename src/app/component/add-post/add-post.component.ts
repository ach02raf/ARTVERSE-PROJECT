import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { ModalDirective } from "ngx-bootstrap/modal";
import { AuthentificationService } from "src/app/services/authentification.service";
import { HashtagColorPipePipe } from "../../pipe/hashtag-color-pipe.pipe";
import { PublicationService } from "../../services/publication.service";
import { debounceTime } from "rxjs/operators";
import { LoggedInUserService } from "src/app/services/logged-in-user.service";
import { log } from "console";

interface Image {
  name: string;
  file: File;
  url: SafeUrl;
}
@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.scss"],
})
export class AddPostComponent implements OnInit {
  @ViewChild("myModal") myModal: ModalDirective;
  @ViewChild("myModal2") myModal2: ModalDirective;
  @Output() newItemEvent = new EventEmitter<boolean>();

  images: Image[] = [];
  postText: any;
  hashtags = [];
  filteredHashtags: any[] = [];
  isModalVisible = true;
  invalide = false;
  isCopyrightChecked: boolean = false;
  postTextElement: HTMLElement | null;
  idUser: any;
  loggedInUser: any;

  constructor(
    private sanitizer: DomSanitizer,

    private loggedUserServ: LoggedInUserService,
    private publicationService: PublicationService
  ) {
    this.idUser = this.loggedUserServ.getUserID();
  }

  ngOnInit(): void {
    this.loggedUserServ.findUserById(this.idUser).subscribe(async (res) => {
      this.loggedInUser = await res;
    });

    this.getHashtag();
    this.postTextElement = document.querySelector(".form-control.inputtag");
  }

  addNewItem(value: boolean) {
    this.newItemEvent.emit(value);
  }
  getHashtag() {
    this.publicationService.getMyHashtag().subscribe((data) => {
      this.hashtags = data;
    });
  }

  insertHashtag(hashtag: string): void {
    const postTextElement = document.querySelector(".post-text .inputtag");
    const postText = postTextElement.textContent || "";
    postTextElement.textContent = postText + "#" + hashtag + " ";
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
  }

  clearSelectedImage(index: any) {
    this.images.splice(index, 1);
  }
  onSubmit(event: Event) {
    event.preventDefault();
    const postText = this.postTextElement.textContent || "";
    if (postText.trim() === "") {
      this.invalide = true;

      return;
    }

    const hashtags = postText.match(/#(\w+)/g) || [];
    const uniqueHashtags = Array.from(
      new Set(hashtags.map((tag) => tag.slice(1)))
    );

    const formData = new FormData();

    formData.append("text", postText);
    formData.append("Id_user", this.idUser);
    formData.append("copyrightChecked", this.isCopyrightChecked.toString());

    if (uniqueHashtags.length === 1) {
      formData.append("hashtags", uniqueHashtags[0]);
    } else {
      uniqueHashtags.forEach((tag) => {
        formData.append("hashtags", tag);
      });
    }

    this.images.forEach((image) => formData.append("images", image.file));

    // send API request to create the new post
    this.publicationService.createPost(formData).subscribe(
      (response) => {
        // handle response from the API
        this.postTextElement.innerHTML = "";
        this.images = [];
        this.addNewItem(true);
        this.myModal.hide();
        this.myModal2.show();
      },
      (error) => {
        this.invalide = true;
        console.error("err", error);
        // handle error from the API
        alert("you trying to use image ");
        return;
      }
    );
  }

  onInputChange(value: string) {
    const regex = /(^|\s)(#[a-zA-Z\d]+)/g;
    const replacedValue = value.replace(
      regex,
      `$1<span style="color:red;">$2</span>`
    );
    this.postText = replacedValue;
    this.invalide = false;

    if (value.indexOf("#") !== -1) {
      const inputHashtag = value.substring(value.lastIndexOf("#") + 1);

      this.filteredHashtags = this.hashtags
        .filter((hashtag) =>
          hashtag.tag_name.toLowerCase().startsWith(inputHashtag.toLowerCase())
        )
        .map((hashtag) => ({ tag_name: hashtag.tag_name }));
    } else {
      this.filteredHashtags = [];
    }
  }

  addHashtag(hashtag: string) {
    const lastIndex = this.postText.lastIndexOf("#");
    this.postText = this.postText.substring(0, lastIndex) + "#" + hashtag + " ";
  }
}
