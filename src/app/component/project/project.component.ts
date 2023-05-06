import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProjectService } from "src/app/services/project.service";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
  projects = [];
  projectsCopy = [];
  @Input() source: string;
  @Input() idprofile: string;

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(async (data) => {
      console.log("data project ", data);
      this.projects = await data;
      for (let element of data) {
        let countReaction = element["reaction"].length;
        let coutCommentaire = element["commentaires"].length;
        console.log(coutCommentaire);
        this.projectsCopy.push({
          ...element,
          countReaction,
          coutCommentaire,
        });
      }
    });
  }

  isHomePage(): boolean {
    return this.router.url === "/home";
  }
}
