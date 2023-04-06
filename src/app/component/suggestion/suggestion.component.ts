import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-suggestion",
  templateUrl: "./suggestion.component.html",
  styleUrls: ["./suggestion.component.scss"],
})
export class SuggestionComponent implements OnInit {
  suggested: any;
  user: Object;

  test = {
    0: {
      _id: "64260ca14d6a3f8054474d44",
      firstname: "yosra",
      lastname: "yosra",
      username: "yos",
      email: "yos@gmail.co",
      password: "$2b$10$QihHAvXnZdfQWlx7tiblUe2UxZnBm7HniuLtIMUbhJDMrK7GEHeqG",
      bio: "this is a bio for yosra",
      followers: [],
      galerie: [],
      liens: [
        "https://www.facebook.com/yosra.wanene/",
        "https://www.linkedin.com/in/yosra-wanene-3ba8a2214/",
        "https://twitter.com/yosra_wanene",
      ],
      __v: 0,
    },
    1: {
      _id: "fjhfhgdtydry",
      firstname: "test",
      lastname: "test",
      username: "yos",
      email: "yos@gmail.co",
      password: "$2b$10$QihHAvXnZdfQWlx7tiblUe2UxZnBm7HniuLtIMUbhJDMrK7GEHeqG",
      bio: "this is a bio for yosra",
      followers: [],
      galerie: [],
      liens: [
        "https://www.facebook.com/yosra.wanene/",
        "https://www.linkedin.com/in/yosra-wanene-3ba8a2214/",
        "https://twitter.com/yosra_wanene",
      ],
      __v: 0,
    },
  };

  constructor(private userServ: UserService) {}

  ngOnInit(): void {
    console.log("hjgjhfgtest", this.test);

    this.userServ.getAllUsers().subscribe((res) => {
      const users = Object.values(res); // cast the object to an array
      this.suggested = users.slice(0, 3); // get the first three elements

      console.log("suggest", this.suggested);
      console.log("suggest", this.suggested[0].firstname);
    });
    this.userServ.findUserByUsername("yosrawanene28").subscribe((res) => {
      this.user = res;
      console.log("username load", this.user);
    });
    console.log("suggest2", this.suggested);
    console.log("username load2", this.user);
  }
}
