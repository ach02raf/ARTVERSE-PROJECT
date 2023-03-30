import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-suggestion",
  templateUrl: "./suggestion.component.html",
  styleUrls: ["./suggestion.component.scss"],
})
export class SuggestionComponent implements OnInit {
  constructor() {}

  suggested = [
    {
      firstname: "yosra",
      lastname: "wanen",
      art: "UI / UX designer | Illustrator",
    },
    {
      firstname: "Maha",
      lastname: "Grindi",
      art: "UI / UX designer | Illustrator",
    },

    {
      firstname: "Achraf",
      lastname: "Ben Fredj",
      art: "UI / UX designer | Illustrator",
    },
  ];
  ngOnInit(): void {}
}
