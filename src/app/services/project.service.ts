import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  API_Creat_project = "http://localhost:5000/Project/PostPrpject";

  constructor(private http: HttpClient) {}

  createProject(ProjectData: any): Observable<any> {
    return this.http.post(this.API_Creat_project, ProjectData);
  }
}
