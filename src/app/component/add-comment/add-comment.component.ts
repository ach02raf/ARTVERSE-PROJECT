import { Component, OnInit , Input } from '@angular/core';
import { PublicationService } from "../../services/publication.service";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Input() idPub: any;
  @Input() listComm: any ;
  constructor(    private publicationService: PublicationService    ) { }

  ngOnInit(): void {
  }

  postComment(comment: HTMLTextAreaElement) {
    console.log(comment);
     // or do something else with the comment value
     this.publicationService.addcomment({comm : comment.value , idPub : this.idPub , iduser : 0 }).subscribe(
      (response) => {
        console.log("ok",response);
        // handle response from the API
        comment.value = '';
    
      },
      (error) => {
        console.error("err" ,error);
        // handle error from the API
      }
    );
  }

  reactionComm(index : any ){
    this.publicationService.addcommentreaction({commindex : index , idPub : this.idPub , iduser : 0 }).subscribe(
      (response) => {
        console.log("ok",response);
    
      },
      (error) => {
        console.error("err" ,error);
        // handle error from the API
      }
    );
  }

  postCommentReply(comment: HTMLTextAreaElement ,index : any  ){
    this.publicationService.addcommentReply({commindex : index , idPub : this.idPub , iduser : 0 , reply : comment.value }).subscribe(
      (response) => {
        console.log("ok",response);
    
      },
      (error) => {
        console.error("err" ,error);
        // handle error from the API
      }
    );
  }
}
