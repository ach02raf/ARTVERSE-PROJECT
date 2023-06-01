import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class SinglesService {
  API_AddSinle =
    "https://artverse-project-api-nodejs.onrender.com/Single/addSingle";
  API_GEtSinle =
    "https://artverse-project-api-nodejs.onrender.com/Single/GetSingle";
  API_updateSinle =
    "https://artverse-project-api-nodejs.onrender.com/Single/UpdateSingle";
  API_AddSinlepub =
    "https://artverse-project-api-nodejs.onrender.com/Single/SinglePublication";

  API_creat_challenge =
    "https://artverse-project-api-nodejs.onrender.com/Challenge/CreatChallenge";
  API_get_challenge =
    "https://artverse-project-api-nodejs.onrender.com/Challenge/getChallenge";
  API_send_challenge =
    "https://artverse-project-api-nodejs.onrender.com/Challenge/sendChallenge";
  API_get_challengeByID =
    "https://artverse-project-api-nodejs.onrender.com/Challenge/getChallengeById";
  apiwinner =
    "https://artverse-project-api-nodejs.onrender.com/Challenge/winner";

  constructor(private http: HttpClient) {}

  send_single(data: any): Observable<any> {
    return this.http.post(this.API_AddSinle, data);
  }
  get_Single(): Observable<any> {
    return this.http.get(this.API_GEtSinle);
  }

  update_Single(data): Observable<any> {
    return this.http.put(this.API_updateSinle, data);
  }

  send_single_pub(data): Observable<any> {
    return this.http.post(this.API_AddSinlepub, data);
  }

  creat_challenges(data): Observable<any> {
    return this.http.post(this.API_creat_challenge, data);
  }
  get_chanllenge(): Observable<any> {
    return this.http.get(this.API_get_challenge);
  }

  get_chanllengeByID(data): Observable<any> {
    return this.http.post(this.API_get_challengeByID, data);
  }

  winner(data): Observable<any> {
    return this.http.post(this.apiwinner, data);
  }

  send_chanllenge(data): Observable<any> {
    console.log("data data", data);
    return this.http.post(this.API_send_challenge, data);
  }

  deleteChallnge(id): Observable<any> {
    return this.http.post(
      "https://artverse-project-api-nodejs.onrender.com/Challenge/deleteChallenge",
      id
    );
  }
}
