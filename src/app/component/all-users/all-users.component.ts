import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Chart } from "chart.js";
import { PublicationService } from "src/app/services/publication.service";
@Component({
  selector: "app-all-users",
  templateUrl: "./all-users.component.html",
  styleUrls: ["./all-users.component.scss"],
})
export class AllUsersComponent implements OnInit {
  constructor(
    private userServ: UserService,
    private pubService: PublicationService
  ) {}
  users: any = [];
  hoveredUser = "";
  pub: any = [];

  onRowHover(user: any) {
    this.hoveredUser = user;
    console.log("hoveredUser", this.hoveredUser);
    this.getPublications(this.hoveredUser["_id"]).length;
    this.chartStat();
  }

  getPublications(id) {
    this.pubService.getPostsByUserId(id).subscribe((data) => {
      this.pub.push(data);
      this.pub = data;
      console.log("nos lil data", data);
    });
    return this.pub;
  }

  displayUsers() {
    this.userServ.getAllUsers().subscribe((data) => {
      console.log("all users", data);
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
        labels: ["pub", "project", "likes", "comments", "followers", "follow"],
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
              10,
              30,
              4,
              15,
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
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest",
        },
        responsive: true,
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
                suggestedMin: 0,
                suggestedMax: 350,
                padding: 20,
                fontColor: "#9a9a9a",
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
  }
}
