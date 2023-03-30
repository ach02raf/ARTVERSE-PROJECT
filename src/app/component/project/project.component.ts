import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  isHomePage(): boolean {
    return this.router.url === "/home";
  }
}
