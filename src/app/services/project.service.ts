import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ProjectService {
  API_Creat_project = "http://localhost:5000/Project/PostPrpject";
  API_Get_project = "http://localhost:5000/Project/GetProjects";
  apiUrlGetOneImg = "http://localhost:5000/Posts/getImage";
  apiUrlUpdateProject = "http://localhost:5000/Project/updateProject";

  constructor(private http: HttpClient) {}

  createProject(ProjectData: any): Observable<any> {
    return this.http.post(this.API_Creat_project, ProjectData);
  }

  getAllProject(): Observable<any> {
    return this.http.get(this.API_Get_project);
  }
  getImage(id: any) {
    return this.http.get(`${this.apiUrlGetOneImg}?id=${id}`);
  }
  updateVueProject(id: any, vueNumber: any, vueUsers: any) {
    return this.http.patch(`${this.apiUrlUpdateProject}`, {
      id,
      vueNumber,
      vueUsers,
    });
  }
}
