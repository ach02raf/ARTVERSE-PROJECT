import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

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
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}
  selectedFileName: string = "";
  selectedImage: SafeUrl | undefined;

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      this.selectedFileName = selectedFile.name;
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = this.sanitizer.bypassSecurityTrustUrl(
          reader.result as string
        );
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  clearSelectedImage() {
    this.selectedFileName = "";
    this.selectedImage = undefined;
  }
}
