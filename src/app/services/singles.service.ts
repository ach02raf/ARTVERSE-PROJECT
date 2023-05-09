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


  API_creat_challenge = "http://localhost:5000/Challenge/CreatChallenge";
  API_get_challenge = "http://localhost:5000/Challenge/getChallenge";
  API_send_challenge = "http://localhost:5000/Challenge/sendChallenge";
  API_get_challengeByID = "http://localhost:5000/Challenge/getChallengeById";
  apiwinner = "http://localhost:5000/Challenge/winner";

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



  creat_challenges(data) : Observable<any> {
    return this.http.post(this.API_creat_challenge , data);
  } 
  get_chanllenge(): Observable<any> {
    return this.http.get(this.API_get_challenge );
  } 

  get_chanllengeByID(data): Observable<any> {
    return this.http.post(this.API_get_challengeByID , data );
  } 

  winner(data): Observable<any> {
    return this.http.post(this.apiwinner , data );
  } 

  send_chanllenge(data): Observable<any> {
    console.log("data data" , data)
    return this.http.post(this.API_send_challenge , data );
  } 

  deleteChallnge(id ) : Observable<any> {
    return this.http.post('http://localhost:5000/Challenge/deleteChallenge' , id );
  }
  
}
