import { Component, OnInit } from "@angular/core";
import { AuthentificationService } from "src/app/services/authentification.service";

@Component({
  selector: "app-competition",
  templateUrl: "./competition.component.html",
  styleUrls: ["./competition.component.scss"],
})
export class CompetitionComponent implements OnInit {
  constructor(private authserv: AuthentificationService) {}
  challenges = [];
  currentChallengeSource = [
    {
      title: "  Ink Color ",
      Category: "Illustration",
      deadline: "12-16-2022",
      description:
        "Black Design comes with three pre-built pages to help you getstarted faster. You can change the text and images and you're goodto go.",
      partenaire: {
        _id: 1,
        name: "Adobe",
        Logo: "adobe.png",
      },
      participants: [{ _id: 1 }, { _id: 2 }, { _id: 3 }],
      image: "challenge3.png",
      winner: "64260d644d6a3f8054474d48",
    },
    {
      title: "  3D Characters ",
      Category: "3D",
      deadline: "12-16-2022",
      partenaire: {
        _id: 2,
        name: "3DS MAX",
        Logo: "3dsmax.png",
      },
      description:
        "Black Design comes with three pre-built pages to help you getstarted faster. You can change the text and images and you're goodto go.",
      participants: [
        { _id: 1 },
        { _id: 2 },
        { _id: 3 },
        { _id: 2 },
        { _id: 3 },
        { _id: 2 },
        { _id: 3 },
      ],
      image: "3dchallenge.jpg",
      winner: "64260d644d6a3f8054474d48",
    },
  ];
  finishedChallengeSource = [
    {
      title: "  Ink Color ",
      Category: "Illustration",
      deadline: "12-16-2022",
      description:
        "Black Design comes with three pre-built pages to help you getstarted faster. You can change the text and images and you're goodto go.",
      partenaire: {
        _id: 1,
        name: "Adobe",
        Logo: "adobe.png",
      },
      participants: [{ _id: 1 }, { _id: 2 }, { _id: 3 }],
      image: "challenge3.png",
      winner: "64260d644d6a3f8054474d48",
    },
    {
      title: "  3D Characters ",
      Category: "3D",
      deadline: "12-16-2022",
      partenaire: {
        _id: 2,
        name: "3DS MAX",
        Logo: "3dsmax.png",
      },
      description:
        "Black Design comes with three pre-built pages to help you getstarted faster. You can change the text and images and you're goodto go.",
      participants: [
        { _id: 1 },
        { _id: 2 },
        { _id: 3 },
        { _id: 2 },
        { _id: 3 },
        { _id: 2 },
        { _id: 3 },
      ],
      image: "3dchallenge.jpg",
      winner: "64260d644d6a3f8054474d48",
    },
  ];

  findUser(id: any) {
    this.authserv.findUserById(id).subscribe((data) => {
      console.log("winner winner", data);
    });
  }

  ngOnInit(): void {
    this.finishedChallengeSource.forEach((challenge) => {
      this.authserv.findUserById(challenge.winner).subscribe((data) => {
        console.log("winner winner", data);

        this.challenges.push({ ...challenge, winnersData: data });
        console.log("challenge with winners", this.challenges);
      });
    });
  }
}
