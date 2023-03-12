import { Component, OnInit } from "@angular/core";

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
  constructor() {}

  ngOnInit(): void {}
}
