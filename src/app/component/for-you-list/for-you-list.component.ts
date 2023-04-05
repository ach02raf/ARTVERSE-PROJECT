import { Component, OnInit } from "@angular/core";
import { LoggedInUserService } from "src/app/services/logged-in-user.service";

@Component({
  selector: "app-for-you-list",
  templateUrl: "./for-you-list.component.html",
  styleUrls: ["./for-you-list.component.scss"],
})
export class ForYouListComponent implements OnInit {
  loggedInUser: any;
  isCollapsed = true;

  idUser: any;
  constructor(private loggedUserServ: LoggedInUserService) {
    this.idUser = this.loggedUserServ.getUserID();
  }

  List = [
    {
      _id: 1,
      text: "Anim pariatur cliche reprehenderit, enim eiusmod high lif accusamus terry richardson ad squid. 3 wolf moon officia aute,non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch moon tempor, sunt",
      date: "12/12/2022",
      images: ["chester-wade.jpg"],
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

  ngOnInit(): void {
    this.loggedUserServ.findUserById(this.idUser).subscribe((res) => {
      this.loggedInUser = res;
      console.log("foryoulist", this.loggedInUser);
    });
  }
}
