import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-for-you-list",
  templateUrl: "./for-you-list.component.html",
  styleUrls: ["./for-you-list.component.scss"],
})
export class ForYouListComponent implements OnInit {
  constructor() {}

  List = [
    {
      _id: 1,
      text: "ForYouListComponent",
      date: "12/12/2022",
      images: ["chester-wade.jpg"],
      reaction: [{ likes: 1 }, { hate: 2 }],
      commentaires: [{ iduser: 1, comment: "i like this image" }],
      hashtag: ["#art", "#new"],
    },
    {
      _id: 2,
      text: "ForYouListComponent",
      date: "13/12/2022",
      images: ["mark-finn.jpg"],
      reaction: [{ likes: 1 }, { hate: 2 }],
      commentaires: [{ iduser: 1, comment: "i like this image" }],
      hashtag: ["#art", "#new"],
    },
    // {
    //   _id: 2,
    //   text: "ForYouListComponent",
    //   date: "13/12/2022",
    //   images: ["lora.jpg"],
    //   reaction: [{ likes: 1 }, { hate: 2 }],
    //   commentaires: [{ iduser: 1, comment: "i like this image" }],
    //   hashtag: ["#art", "#new"],
    // },
    // {
    //   _id: 3,
    //   text: "ForYouListComponent",
    //   date: "15/12/2022",
    //   images: ["img_3115.jpg"],
    //   reaction: [{ likes: 1 }, { hate: 2 }],
    //   commentaires: [{ iduser: 1, comment: "i like this image" }],
    //   hashtag: ["#art", "#new"],
    // },
  ];

  ngOnInit(): void {}
}
