import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { AuthentificationService } from "src/app/services/authentification.service";
import { HashtagColorPipePipe } from "../../pipe/hashtag-color-pipe.pipe";

interface Image {
  name: string;
  url: SafeUrl;
}
@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.scss"],
})
export class AddPostComponent implements OnInit {
  // publication = {
  //   _id: 1,
  //   text: "ForYouListComponent",
  //   date: "12/12/2022",
  //   images: ["chester-wade.jpg"],
  //   reaction: [{ likes: 1 }, { hate: 2 }],
  //   commentaires: [{ iduser: 1, comment: "i like this image" }],
  //   hashtag: ["#art", "#new"],
  // };
  images: Image[] = [];
  postText: any;
  hashtags = [
    { id: 1, tag: "new" },
    { id: 2, tag: "hi" },
    { id: 3, tag: "nikew" },
    { id: 4, tag: "now" },
  ];
  filteredHashtags: string[] = [];

  loggedInUser: any;

  idUser: any;
  constructor(
    private sanitizer: DomSanitizer,
    private authServ: AuthentificationService
  ) {
    this.idUser = this.authServ.getUserID();
  }
  postTextElement: HTMLElement | null;
  ngOnInit(): void {
    this.authServ.findUserById(this.idUser).subscribe((res) => {
      this.loggedInUser = res;
    });

    this.postTextElement = document.querySelector(".form-control.inputtag");
  }

  onFileSelected(event: any): void {
    const files = event.target.files;
    for (const file of files) {
      const url = URL.createObjectURL(file);
      const safeUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
      const image: Image = {
        name: file.name,
        url: safeUrl,
      };
      this.images.push(image);
    }
    console.log(this.images);
  }

  clearSelectedImage(index: any) {
    this.images.splice(index, 1);
  }

  onSubmit() {
    const postText = this.postTextElement.textContent || ""; // get the value of the contenteditable element
    const hashtags = postText.match(/#\w+/g);
    const uniqueHashtags = Array.from(new Set(hashtags));
    console.log(uniqueHashtags);
    // Code to handle form submission
  }

  onInputChange(value: string) {
    if (value.indexOf("#") !== -1) {
      const inputHashtag = value.substring(value.lastIndexOf("#") + 1);

      this.filteredHashtags = this.hashtags
        .filter((hashtag) =>
          hashtag.tag.toLowerCase().startsWith(inputHashtag.toLowerCase())
        )
        .map((hashtag) => hashtag.tag);
    } else {
      this.filteredHashtags = [];
    }
  }

  addHashtag(hashtag: string) {
    const lastIndex = this.postText.lastIndexOf("#");
    this.postText = this.postText.substring(0, lastIndex) + "#" + hashtag + " ";
  }
}
