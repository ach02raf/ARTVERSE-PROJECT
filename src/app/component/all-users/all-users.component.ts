import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Chart } from "chart.js";
import { PublicationService } from "src/app/services/publication.service";
import { ProjectService } from "src/app/services/project.service";
@Component({
  selector: "app-all-users",
  templateUrl: "./all-users.component.html",
  styleUrls: ["./all-users.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AllUsersComponent implements OnInit {
  constructor(
    private userServ: UserService,
    private pubService: PublicationService,
    private ref: ChangeDetectorRef,
    private projService: ProjectService
  ) {}
  users: any = [];
  hoveredUser = "";
  Allpub: any = [];
  Allproject: any = [];

  async onRowHover(user: any) {
    this.hoveredUser = await user;
    let nbpub: number = 0;
    let nbLike: number = 0;
    let nbComment: number = 0;
    let nbFollewers: number = this.hoveredUser["followers"].length;
    for (let item of this.Allpub) {
      if (this.hoveredUser["_id"] === item["Id_user"]) {
        nbpub++;
        nbLike += item["reaction"].length;
        nbComment += item["commentaires"].length;
      }
    }

    let nbProject: number = 0;
    let nbView: number = 0;
    for (let item of this.Allproject) {
      if (this.hoveredUser["_id"] === item["Id_user"]) {
        nbProject++;
        nbView += item["vueNumber"];
      }
    }
    this.chartStat(nbpub, nbProject, nbLike, nbComment, nbFollewers, nbView);
  }

  getAllPosts() {
    this.pubService.getPost().subscribe(async (data) => {
      this.Allpub = await data;
    });
  }
  getAllProject() {
    this.projService.getAllProject().subscribe(async (data) => {
      this.Allproject = await data;
    });
  }

  displayUsers() {
    this.userServ.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  chartStat(
    nbPub: number,
    nbProject: number,
    nbLike: number,
    nbComment: number,
    nbFollewers: number,
    nbView: number
  ) {
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
            data: [nbPub, nbProject, nbLike, nbComment, nbFollewers, nbView],
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
    this.getAllPosts();
    this.getAllProject();
  }
}
