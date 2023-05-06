import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class SinglesService {
  API_AddSinle = "http://localhost:5000/Single/addSingle";
  API_GEtSinle = "http://localhost:5000/Single/GetSingle";
  API_updateSinle = "http://localhost:5000/Single/UpdateSingle";
  API_AddSinlepub = "http://localhost:5000/Single/SinglePublication";

  constructor(private http: HttpClient) { }

  send_single(data: any): Observable<any> {
    return this.http.post(this.API_AddSinle, data);
  }
  get_Single(): Observable<any> {
    return this.http.get(this.API_GEtSinle);
  }

  update_Single(data): Observable<any> {
    return this.http.put(this.API_updateSinle , data);
  }

  send_single_pub(data) : Observable<any> {
    return this.http.post(this.API_AddSinlepub , data);
  } 
}
