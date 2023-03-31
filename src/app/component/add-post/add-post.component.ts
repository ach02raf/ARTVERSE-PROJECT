import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { HashtagColorPipePipe } from '../../pipe/hashtag-color-pipe.pipe';
import { PublicationService } from '../../services/publication.service';
import { debounceTime } from 'rxjs/operators';

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
  
  images: Image[] = [];
  postText: any;
  hashtags = [];
  filteredHashtags: any[] = [];

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
      alert("Text is required!");
      return;
    }
    if (this.images.length === 0) {
      alert("At least one image is required!");
      return;
    }
    const hashtags = postText.match(/#(\w+)/g) || [];
    const uniqueHashtags = Array.from(new Set(hashtags.map(tag => tag.slice(1))));
    
    const formData = new FormData();
    formData.append("text", postText);
    uniqueHashtags.forEach((tag) => {
      if (tag.trim() !== '') {
        formData.append("hashtags", tag);
      }
    });
    this.images.forEach((image) => formData.append("images", image.file));
  
    // send API request to create the new post
    this.publicationService.createPost(formData).subscribe(
      (response) => {
        console.log(response);
        // handle response from the API
        
        // clear input fields
        this.postTextElement.innerHTML = "";
        this.images = [];
        
        alert("Post created successfully!");
      },
      (error) => {
        console.error(error);
        // handle error from the API
      }
    );
  }
  


onInputChange(value: string) {
  const regex = /(^|\s)(#[a-zA-Z\d]+)/g;
  const replacedValue = value.replace(regex, `$1<span style="color:red;">$2</span>`);
  this.postText = replacedValue;
  
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