import { Component, OnInit } from '@angular/core';
import { SinglesService } from "src/app/services/singles.service";

import { AuthentificationService } from "src/app/services/authentification.service";
@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {

  constructor(
    private singlesService  : SinglesService ,
    
    private authserv: AuthentificationService
  ) { }
 
  ListCopy: any = [];

  ngOnInit(): void {
    this.getData();
  }


  getData(){
    this.singlesService.get_Single().subscribe(async (data) => {
      console.log("data project ", data);
        for (let element of data) {
        this.authserv.findUserById(element["Id_user"]).subscribe((userData) => {
          this.ListCopy.push( { ...element , userData} );
            }); }
    });
  }

  handleClick(id: any) {
    this.ListCopy.splice(0, this.ListCopy.length);
    this.singlesService.update_Single({id: id}).subscribe((data) => {
      this.getData();
    }, (err) => {
      alert("try agin");
      console.error('An error occurred while updating single', err);
    });
  }
}
