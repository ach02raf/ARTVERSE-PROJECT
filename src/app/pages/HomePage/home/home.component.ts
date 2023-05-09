import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { AuthentificationService } from "src/app/services/authentification.service";
import { PublicationService } from "src/app/services/publication.service";
import * as buffer from "buffer";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeComponent implements OnInit {
  source: any = "home";
  List = [];
  ListCopy = [];
  Listimage = [];
  isCollapsed: boolean[] = [];
  constructor(
    private ref: ChangeDetectorRef,
    private publicationService: PublicationService,
    private sanitizer: DomSanitizer,
    private authserv: AuthentificationService
  ) {}

  hashtags = ["digitalart", "digitaldrawing", "artists", "portrait"];

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");
    this.getPubliction();
    this.ref.detectChanges();
  }
  async getPubliction() {
    this.publicationService.getPost().subscribe(async (data) => {
      this.List = await data;
      for (let item of this.List) {
        this.isCollapsed[item._id] = true;
        this.authserv.findUserById(item.Id_user).subscribe((userData) => {
          let itemCopy = { ...item, userData };
          this.ListCopy.push(itemCopy);

          let imageforpub = [];
          for (let itam of itemCopy.img) {
            this.publicationService
              .getImage(itam.idimg)
              .subscribe(async (data) => {
                const imageDataUrl = buffer.Buffer.from(
                  data["img"]["data"]["data"]
                ).toString("base64");
                const safeUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(
                  `data:data:image/png;base64,${imageDataUrl}`
                );
                imageforpub.push({ _id: data["_id"], safeUrl: safeUrl });
              });
          }
          this.Listimage.push({
            idpub: itemCopy._id,
            listimage: imageforpub,
          });
        });
      }
      this.ref.detectChanges();
    });
  }
  addItem(newItem: boolean) {
    if (newItem) {
      this.ListCopy = [];
      this.getPubliction();
    }
  }
}
