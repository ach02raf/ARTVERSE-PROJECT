import { Component, OnInit } from "@angular/core";
import { PublicationService } from '../../services/publication.service';

@Component({
  selector: "app-for-you-list",
  templateUrl: "./for-you-list.component.html",
  styleUrls: ["./for-you-list.component.scss"],
})
export class ForYouListComponent implements OnInit {
  constructor(
    private publicationService: PublicationService) {}
    imageData: any;
  List = [];
  public commentText: string;
  ngOnInit(): void {
    this.getPubliction() 
    }


  getPubliction() {
    this.publicationService.getPost().subscribe((data) => {
      this.List = data;
      console.log(this.List);
    });
    
  }

  getImageUrl(id: any) {
    this.publicationService.getImage({ id }).subscribe((data) => {
      const imageUrl = "./../../../../../Dmwm-2-Backend/uploads/" + data;
      return imageUrl;
    });
  }
  
  likePost(id: number) {
    
    const  data = {publicationId : id   , UserId : 2 };
    this.publicationService.Reaction(data).subscribe((data) => {
  alert(id);
        });

  }

  // Dislike a post
  dislikePost(id: number) {
    
    alert(id);
  }
}
