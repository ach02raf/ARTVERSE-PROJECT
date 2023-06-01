import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ProjectService {
  API_Creat_project =
    "https://artverse-project-api-nodejs.onrender.com/Project/PostPrpject";
  API_Get_project =
    "https://artverse-project-api-nodejs.onrender.com/Project/GetProjects";
  apiUrlGetOneImg =
    "https://artverse-project-api-nodejs.onrender.com/Posts/getImage";
  apiUrlUpdateProject =
    "https://artverse-project-api-nodejs.onrender.com/Project/updateProject";

  constructor(private http: HttpClient) {}

  createProject(ProjectData: any): Observable<any> {
    return this.http.post(this.API_Creat_project, ProjectData);
  }

  getProjectsByUserId(id: any) {
    return this.http.get(
      `https://artverse-project-api-nodejs.onrender.com/Project/getProjects/${id}`
    );
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
