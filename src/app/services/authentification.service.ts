import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthentificationService {
  // public user: Observable<any>;
  // private userData = new BehaviorSubject(null);
  TOKEN_KEY = "token-key";
  headers = new HttpHeaders().set("Content-Type", "application/json");
  currentUser = {};
  loggedInUser: any = "achraf";

  constructor(private http: HttpClient) {}

  inscriptionPost(user: any): Observable<any> {
    return this.http.post(
      "https://artverse-project-api-nodejs.onrender.com/user/inscription",
      user
    );
  }

  getUserID() {
    const token = localStorage.getItem("token");
    let payload: any;
    if (token) {
      payload = JSON.parse(atob(token.split(".")[1]));
      console.log("payload", payload);
    } else {
      return null;
    }
    return payload._id;
  }

  getToken() {
    return localStorage.getItem("token");
  }

  // check if the token key exists in localStorage and returns a boolean indicating whether the user is authenticated.
  isLoggedIn() {
    return !!localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
  }

  sendMailResetPassword(email) {
    console.log("email service" + email);

    return this.http
      .post(
        "https://artverse-project-api-nodejs.onrender.com/user/forgotPassword",
        { email: email }
      )
      .pipe(
        tap((response) => {
          console.log("sucess", response);
        }),

        catchError((error) => {
          return throwError(() => new Error("test")).pipe();
        })
      );
  }
  login(credentials: { password: string; email: string }): Observable<any> {
    return this.http.post(
      "https://artverse-project-api-nodejs.onrender.com/user/login",
      credentials
    );
  }

  resetPassword(token, password) {
    return this.http
      .patch(
        `https://artverse-project-api-nodejs.onrender.com/user/resetPassword/${token}`,
        {
          password: `${password}`,
        }
      )
      .pipe(
        map((response) => {
          // Extract token from response and save to localStorage
          const token = response["token"];
          console.log("toooken", token);

          localStorage.setItem("token", token);
          console.log("reeeesss", response["token"]);

          return response;
        })
      );
  }

  findUserById(id: any) {
    return this.http.get(
      `https://artverse-project-api-nodejs.onrender.com/user/getUserById/${id}`
    );
  }
  handleError(error: HttpErrorResponse) {
    let msg = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code : ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
