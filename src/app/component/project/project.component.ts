import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
  projects = [
    {
      img: "julie.jpeg",
      Id_user: 1,
      title: "DU EXHIBITION",
      date: "22-09-1954",
      reaction: [{ idUser: 1 }, { idUser: 1 }],
      commentaire: [{ idUser: 1 }],
      hashtag: [{}],
      tools: "Ps",
      catg: ["photographie"],
    },
    {
      img: "project.jpg",
      Id_user: 1,
      title: "TENT - To concern",
      date: "22-09-1954",
      reaction: [{ idUser: 1 }, { idUser: 1 }],
      commentaire: [{ idUser: 1 }],
      hashtag: [{}],
      tools: "Ps",
      catg: ["photographie"],
    },
    {
      img: "sign.jpeg",
      Id_user: 1,
      title: "project name",
      date: "22-09-1954",
      reaction: [{ idUser: 1 }, { idUser: 1 }],
      commentaire: [{ idUser: 1 }],
      hashtag: [{}],
      tools: "Ps",
      catg: ["photographie"],
    },
    {
      img: "lora.jpg",
      Id_user: 1,
      title: "project name",
      date: "22-09-1954",
      reaction: [{ idUser: 1 }, { idUser: 1 }],
      commentaire: [{ idUser: 1 }],
      hashtag: [{}],
      tools: "Ps",
      catg: ["photographie"],
    },
    {
      img: "sign.jpeg",
      Id_user: 1,
      title: "project name",
      date: "22-09-1954",
      reaction: [{ idUser: 1 }, { idUser: 1 }],
      commentaire: [{ idUser: 1 }],
      hashtag: [{}],
      tools: "Ps",
      catg: ["photographie"],
    },
    {
      img: "julie.jpeg",
      Id_user: 1,
      title: "project name",
      date: "22-09-1954",
      reaction: [{ idUser: 1 }, { idUser: 1 }],
      commentaire: [{ idUser: 1 }],
      hashtag: [{}],
      tools: "Ps",
      catg: ["photographie"],
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  isHomePage(): boolean {
    return this.router.url === "/home";
  }
}
