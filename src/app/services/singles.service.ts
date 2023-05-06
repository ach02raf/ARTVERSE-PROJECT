import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class SinglesService {
  API_AddSinle = "http://localhost:5000/Single/addSingle";

  constructor(private http: HttpClient) { }

  send_single(data: any): Observable<any> {
    return this.http.post(this.API_AddSinle, data);
  }
}
