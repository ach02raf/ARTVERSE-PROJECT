import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoggedInUserService {
  loggedInUser: any = "achraf";

  constructor(private http: HttpClient) {}

  getUserID() {
    const token = localStorage.getItem("token");
    let payload: any;
    if (token) {
      payload = JSON.parse(atob(token.split(".")[1]));
      console.log("payload loggedin", payload);
    } else {
      return null;
    }
    return payload._id;
  }

  findUserById(id: any) {
    return this.http.get(
      `https://artverse-project-api-nodejs.onrender.com/user/getUserById/${id}`
    );
  }
}
