import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  apiUrlGetHashtag = 'http://localhost:5000/Posts/GetTag';
  apiUrlCreatPost='http://localhost:5000/Posts/PostPublication';
  constructor(private http: HttpClient) { }

  getMyHashtag(): Observable<any> {
    return this.http.get<any>(this.apiUrlGetHashtag);
  } 
  
  createPost(postData: any): Observable<any> {
    return this.http.post(this.apiUrlCreatPost , postData);
  }
}
