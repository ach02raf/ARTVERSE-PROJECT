import { Component, OnInit ,ViewChild } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { PublicationService } from '../../services/publication.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

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
  @ViewChild('myModal') myModal: ModalDirective;
  @ViewChild('myModal2') myModal2: ModalDirective;
  images: Image[] = [];
  postText: any;
  hashtags = [];
  filteredHashtags: any[] = [];
  isModalVisible = true;
  invalide = false ;
    isCopyrightChecked: boolean = false;
  constructor(
    private sanitizer: DomSanitizer,
    private publicationService: PublicationService
  ) {}

  postTextElement: HTMLElement | null;

 

  ngOnInit(): void {
    
    this.getHashtag();
    this.postTextElement = document.querySelector(".form-control.inputtag");
  }

  getHashtag() {
    this.publicationService.getMyHashtag().subscribe((data) => {
      this.hashtags = data;
    });
  }
  onFileSelected(event: any): void {
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
  onSubmit() {  
    const postText = this.postTextElement.textContent || "";
if (postText.trim() === '') {
  this.invalide = true ;
  
  return;
}
 
const hashtags = postText.match(/#(\w+)/g) || [];
const uniqueHashtags = Array.from(new Set(hashtags.map(tag => tag.slice(1))));

const formData = new FormData();

formData.append("text", postText);
formData.append("userId", "0");
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
    console.log("ok",response);
    // handle response from the API
    this.postTextElement.innerHTML = "";
    this.images = [];
    this.myModal.hide();
    this.myModal2.show();
  },
  (error) => {
    console.error("err" ,error);
    // handle error from the API
  }
);
}
  
 
 
 
 

onInputChange(value: string) {
  const regex = /(^|\s)(#[a-zA-Z\d]+)/g;
  const replacedValue = value.replace(regex, `$1<span style="color:red;">$2</span>`);
  this.postText = replacedValue;
  this.invalide = false ;
 
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
    this.postText =
      this.postText.substring(0, lastIndex) + "#" + hashtag + " ";
  }
}