 import { Component, OnInit ,ViewChild , Input} from "@angular/core";
import { AuthentificationService } from "src/app/services/authentification.service";
import { SinglesService } from "src/app/services/singles.service";
import { PublicationService } from "src/app/services/publication.service";
import { ModalDirective } from "ngx-bootstrap/modal";
import { LoggedInUserService } from "src/app/services/logged-in-user.service";


import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import * as buffer from "buffer";

interface Image {
  name: string;
  file: File;
  url: SafeUrl;
}

@Component({
  selector: "app-competition",
  templateUrl: "./competition.component.html",
  styleUrls: ["./competition.component.scss"],
})
export class CompetitionComponent implements OnInit {
  idUser: any;
  id : any ;
  constructor(private authserv: AuthentificationService ,private singlesService : SinglesService , private publicationService : PublicationService ,
    private sanitizer: DomSanitizer,
    private loggedUserServ: LoggedInUserService,
      ) {
        this.idUser = this.loggedUserServ.getUserID();
      }
  challenges = [];
  @Input() Listimage: any;
  @ViewChild("myModal") myModal: ModalDirective;
  images: Image[] = [];
  chlCopy :  any ;
  challengesData : [] = [] ;
  currentChallengeSource = [
  /*   {
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
    }, */
  ];
  finishedChallengeSource = [
  /*   {
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
    }, */
  ];

  findUser(id: any) {
    this.authserv.findUserById(id).subscribe((data) => {
      console.log("winner winner", data);
    });
  }

  ngOnInit(): void {
    
    this.getchanlleng();
    this.finishedChallengeSource.forEach((challenge) => {
      this.authserv.findUserById(challenge.winner).subscribe((data) => {
        console.log("winner winner", data);

        this.challenges.push({ ...challenge, winnersData: data });
        console.log("challenge with winners", this.challenges);
      });
    });
  }

  getImage(idimage: any, idpub: any) {
    for (let item of this.Listimage) {
      if (item.idpub === idpub) {
        for (let itam of item.listimage) {
          if (itam._id === idimage) {
            return itam.safeUrl;
          }
        }
      }
    }
  }
  getchanlleng(){
    
  
    this.singlesService.get_chanllenge().subscribe(async (data) => { 
        console.log("data project ", data);
        console.log("hello yosra");
        this.challengesData = await data;
  
     /*    for (let item of data) {             
  
               
              for (let itam of item['image']) {
                this.publicationService.getImage(itam.idimg).subscribe(async (dataimage) => {

                    const imageDataUrl = buffer.Buffer.from(dataimage["img"]["data"]["data"]).toString("base64");
                    const safeUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(`data:data:image/png;base64,${imageDataUrl}` );
                     imageforpub.push({ _id: data["_id"], safeUrl: safeUrl });  
                  let itemCopy = {
                    ...itam,
                    safeUrl: safeUrl, 
                  };

                  this.chlCopy.push(itemCopy);

                  });
              }
              
            } */
          }
    );
  } 


  format(date: string): string {
    const now = new Date();
    const diff = Math.abs(now.getTime() - Date.parse(date));
    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));

    if (diffHours <= 23) {
      return `${diffHours}h`;
    } else if (diffDays <= 6) {
      return `${diffDays}d`;
    } else if (diffWeeks <= 10) {
      return `${diffWeeks}w`;
    } /*  else {
      return this.datePipe.transform(Date.parse(date), 'dd/MM/yyyy');
    } */
  }


  reactioncount(list: any) {
    return list.length;
  }

  onFileSelected(event: any): void {
    event.preventDefault(); // empêche le rafraîchissement de la page
    const files = event.target.files;
    for (const file of files) {
      const url = URL.createObjectURL(file);
      const safeUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
      const image: Image = {
        name: file.name,
        file: file,
        url: safeUrl,
      };
      this.images.push(image);
    }
  }


  clearSelectedImage(index: any) {
    this.images.splice(index, 1);
  }

  onSubmit(){
 
    const formData = new FormData();

    formData.append("Id_user", this.idUser);
    formData.append("Id_publiction", this.id);
    this.images.forEach((image) => formData.append("images", image.file));



    this.singlesService.send_chanllenge(formData).subscribe(
     
      (response) => {
        // handle response from the API
        
        this.images = [];
      
        this.myModal.hide();
     
      },
      (error) => {
       
        console.error("err", error);
        // handle error from the API
        alert("you trying to use image ");
        return;
      }); 

  }


  openModale(id : any ){
    this.id = id ;
    this.myModal.show() ;
  }


}
