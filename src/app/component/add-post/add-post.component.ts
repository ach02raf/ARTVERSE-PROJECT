import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { AuthentificationService } from "src/app/services/authentification.service";
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
  publication = {
    _id: 1,
    text: "ForYouListComponent",
    date: "12/12/2022",
    images: ["chester-wade.jpg"],
    reaction: [{ likes: 1 }, { hate: 2 }],
    commentaires: [{ iduser: 1, comment: "i like this image" }],
    hashtag: ["#art", "#new"],
  };
  images: Image[] = [];

  loggedInUser: any;

  idUser: any;
  constructor(
    private sanitizer: DomSanitizer,
    private authServ: AuthentificationService
  ) {
    this.idUser = this.authServ.getUserID();
  }

  ngOnInit(): void {
    this.authServ.findUserById(this.idUser).subscribe((res) => {
      this.loggedInUser = res;
    });
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
}
