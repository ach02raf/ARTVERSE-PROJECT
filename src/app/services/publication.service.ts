import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class PublicationService {
  apiUrlGetHashtag =
    "https://artverse-project-api-nodejs.onrender.com/Posts/GetTag";
  apiUrlCreatPost =
    "https://artverse-project-api-nodejs.onrender.com/Posts/PostPublication";
  apiUrlGetPost =
    "https://artverse-project-api-nodejs.onrender.com/Posts/getPublications";
  apiUrlGetOneImg =
    "https://artverse-project-api-nodejs.onrender.com/Posts/getImage";
  apiUrReactionPost =
    "https://artverse-project-api-nodejs.onrender.com/Posts/reaction";
  apiUrcomm =
    "https://artverse-project-api-nodejs.onrender.com/Posts/addcomment";
  apiUrcommreaction =
    "https://artverse-project-api-nodejs.onrender.com/Posts/commreaction";
  apiaddcommentReply =
    "https://artverse-project-api-nodejs.onrender.com/Posts/addcommentReply";
  constructor(private http: HttpClient) {}

  getMyHashtag(): Observable<any> {
    return this.http.get<any>(this.apiUrlGetHashtag);
  }

  createPost(postData: any): Observable<any> {
    return this.http.post(this.apiUrlCreatPost, postData);
  }

  getPost(): Observable<any> {
    return this.http.get(this.apiUrlGetPost);
  }

  getImage(id: any) {
    return this.http.get(`${this.apiUrlGetOneImg}?id=${id}`);
  }

  Reaction(data: any): Observable<any> {
    return this.http.put(this.apiUrReactionPost, data);
  }

  addcomment(data: any): Observable<any> {
    return this.http.put(this.apiUrcomm, data);
  }
  addcommentreaction(data: any): Observable<any> {
    return this.http.put(this.apiUrcommreaction, data);
  }

  addcommentReply(data: any): Observable<any> {
    return this.http.put(this.apiaddcommentReply, data);
  }

  getPostsByUserId(id: any) {
    return this.http.get(
      `https://artverse-project-api-nodejs.onrender.com/Posts/getPublications/${id}`
    );
  }

  getPostByID(id: any): Observable<any> {
    return this.http.get(
      `https://artverse-project-api-nodejs.onrender.com/Posts/getPublicationsByID/${id}`
    );
  }

  deletePubliction(id: any): Observable<any> {
    return this.http.post(
      "https://artverse-project-api-nodejs.onrender.com/Posts/deletePost",
      id
    );
  }

  deleteMyPubliction(id: any): Observable<any> {
    return this.http.post(
      "https://artverse-project-api-nodejs.onrender.com/Posts/deleteMyPost",
      id
    );
  }
}
