import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Chart } from "chart.js";
import { PublicationService } from "src/app/services/publication.service";
import { element } from "protractor";
import { ProjectService } from "src/app/services/project.service";
@Component({
  selector: "app-all-users",
  templateUrl: "./all-users.component.html",
  styleUrls: ["./all-users.component.scss"],
})
export class AllUsersComponent implements OnInit {
  constructor(
    private userServ: UserService,
    private pubService: PublicationService,
    private projService: ProjectService
  ) {}
  users: any = [];
  hoveredUser = "";
  pub: any = [];
  followers: any = [];
  proj: any = [];
  comments: any = [];
  nbComment = 0;
  nbLikes = 0;
  likes: any = [];
  Allpub: any = [];

  onRowHover(user: any) {
    this.hoveredUser = user;
    console.log("hoveredUser", this.hoveredUser);
    this.getPublications(this.hoveredUser["_id"]).length;
    this.getProjects(this.hoveredUser["_id"]).length;
    console.log(this.getProjects(this.hoveredUser["_id"]).length);

    // this.getFollowers(this.hoveredUser["_id"]);
    // console.log("azert", this.getFollowers(this.hoveredUser["_id"]));

    this.chartStat();
    this.getComments();
    this.getLikes();
  }

  getPublications(id) {
    this.pubService.getPostsByUserId(id).subscribe((data) => {
      this.pub.push(data);
      this.pub = data;
    });
    return this.pub;
  }

  // getFollowers(id) {
  //   this.userServ.findUserById(id).subscribe(async (res) => {
  //     this.followers.push(res);
  //   });
  //   return this.followers;
  // }

  getProjects(id) {
    this.projService.getProjectsByUserId(id).subscribe((data) => {
      this.proj.push(data);
      this.proj = data;
    });
    return this.proj;
  }

  getComments() {
    this.nbComment = 0;
    this.getPublications(this.hoveredUser["_id"]).forEach((element) => {
      console.log("commen commen commouni", element["commentaires"].length);
      this.nbComment += element["commentaires"].length;
    });
    return this.nbComment;
  }

  getLikes() {
    this.nbLikes = 0;
    this.getPublications(this.hoveredUser["_id"]).forEach((element) => {
      console.log("commen commen commouni likes", element["reaction"].length);
      this.nbLikes += element["reaction"].length;
    });
    return this.nbLikes;
  }

  getAllPosts() {
    this.pubService.getPost().subscribe((data) => {
      this.Allpub.push(data);
      this.Allpub = data;
    });

    return this.pub;
  }

  displayUsers() {
    this.userServ.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  chartStat() {
    var canvas: any = document.getElementById("chartBig");
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
    gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
    gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
    var chartBig = new Chart(ctx, {
      type: "line",
      responsive: true,
      data: {
        labels: ["pub", "project", "likes", "comments", "followers", "views"],
        datasets: [
          {
            label: "stat",
            fill: true,
            backgroundColor: gradientFill,
            borderColor: "#e44cc4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#e44cc4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#be55ed",
            //pointHoverBorderColor:'rgba(35,46,55,1)',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [
              this.getPublications(this.hoveredUser["_id"]).length,
              this.getProjects(this.hoveredUser["_id"]).length,
              this.getLikes(),
              this.getComments(),
              12,
              // this.getFollowers(this.hoveredUser["_id"]),
              44,
            ],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },

        tooltips: {
          backgroundColor: "#fff",
          titleFontColor: "#ccc",
          bodyFontColor: "#666",
          // bodySpacing: 4,
          // xPadding: 12,
          // mode: "nearest",
          // intersect: 0,
          // position: "nearest",
        },
        // responsive: true,
        scales: {
          yAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(0,0,0,0.0)",
                zeroLineColor: "transparent",
              },
              ticks: {
                display: false,
              },
            },
          ],

          xAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(0,0,0,0)",
                zeroLineColor: "transparent",
              },
              ticks: {
                padding: 20,
                fontColor: "#9a9a9a",
              },
            },
          ],
        },
      },
    });
  }
  ngOnInit() {
    this.displayUsers();
    this.chartStat();
    this.getAllPosts();
  }
}
