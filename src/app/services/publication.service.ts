import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  apiUrlGetHashtag = 'http://localhost:5000/Posts/GetTag';
  apiUrlCreatPost='http://localhost:5000/Posts/PostPublication';
  apiUrlGetPost='http://localhost:5000/Posts/getPublications';
  apiUrlGetOneImg='http://localhost:5000/Posts/getImage';
  apiUrReactionPost='http://localhost:5000/Posts/reaction';
  constructor(private http: HttpClient) { }

  getMyHashtag(): Observable<any> {
    return this.http.get<any>(this.apiUrlGetHashtag);
  } 
  
  createPost(postData: any): Observable<any> {
    return this.http.post(this.apiUrlCreatPost , postData);
  }

  getPost(): Observable<any> {
    return this.http.get(this.apiUrlGetPost );
  }
 

  getImage(id: any) { 
    return this.http.get(`${this.apiUrlGetOneImg}?id=${id}`);
  }
  

  Reaction(data: any): Observable<any> {
    return this.http.put(this.apiUrReactionPost , data);
  }

}
