import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { SinglesService } from "src/app/services/singles.service";

interface Image {
  name: string;
  file: File;
  url: SafeUrl;
}
@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.scss']
})
export class AddChallengeComponent implements OnInit {

  images: Image[] = [];
  inputTitle: string;
  inputCategory: string;
  inputpartenaire: string; // change to inputpartenaire
  inputdeadline: Date;
  inputdescription: string;
  
  constructor(
    private sanitizer: DomSanitizer,
    private singlesService : SinglesService ,

  ) { }

  ngOnInit(): void {
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


  onSubmit() {
     if (!this.inputTitle || !this.inputCategory || !this.inputpartenaire || !this.inputdeadline || !this.inputdescription || !this.images ) {
      alert("Please fill in all fields and select an image.");
      return;
    } 
    // create a new object to store form data
      
     
    
    const formData = new FormData();
    
    formData.append("title", this.inputTitle);
    formData.append("Category", this.inputCategory);
    formData.append("partenaire", this.inputpartenaire);
    formData.append("deadline", this.inputdeadline.toISOString());
    formData.append("description", this.inputdescription);
    
    this.images.forEach((image) => formData.append("images", image.file)); 

 

    console.log(formData);


    this.singlesService.creat_challenges(formData).subscribe(
      (response) => {
        console.log("ok", response);
        alert("the challenges has been added ");
        this.inputTitle = '';
        this.inputCategory = '';
        this.inputpartenaire = '';
        this.inputdeadline = null;
        this.inputdescription = '';
        this.images.splice(0 , this.images.length ) ;
        return ;
      },
      (error) => {
        
        alert("try agine ");
        return ;
      }
    );


  }


  deletePubliction(id : any ){



  }

}
