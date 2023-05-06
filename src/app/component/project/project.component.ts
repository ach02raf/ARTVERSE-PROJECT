import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProjectService } from "../../services/project.service";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
  projects = [  
  ];
  constructor(private router: Router , 
    private projectService: ProjectService,
    ) {}

  ngOnInit(): void {

    this.projectService.getAllProject().subscribe(async (data) => {
      console.log("data project " , data);
      this.projects = data ;
    });
  }


  
  
  



  isHomePage(): boolean {
    return this.router.url === "/home";
  }
}
