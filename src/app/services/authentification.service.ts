import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { asyncScheduler, Observable, throwError } from "rxjs";
import { catchError, map, observeOn, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root", 
})
export class AuthentificationService {
  // public user: Observable<any>;
  // private userData = new BehaviorSubject(null);
  TOKEN_KEY = "token-key";
  headers = new HttpHeaders().set("Content-Type", "application/json");
  currentUser = {};
  constructor(private http: HttpClient) {}

  inscriptionPost(user: any): Observable<any> {
    return this.http.post("http://localhost:5000/user/inscription", user).pipe(
      tap((response: any) => {
        localStorage.setItem("token", response.token);
      }),

      catchError((error) => {
        console.log("error enter", error);
        return throwError("the errror is : ", error);
      })
    );
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
      .post("http://localhost:5000/user/forgotPassword", { email: email })
      .pipe(
        tap((response: any) => {
          console.log("sucess", response);
        }),

        catchError((error) => {
          return throwError(() => new Error("test")).pipe();
        })
      );
  }
  login(credentials: { password: string; email: string }): Observable<any> {
    return this.http.post("http://localhost:5000/user/login", credentials).pipe(
      tap((response: any) => {
        localStorage.setItem("token", response.token);
      }),

      catchError((error) => {
        return throwError("the error is : ", error);
      })
    );
  }

  resetPassword(token, password): Observable<any> {
    return this.http
      .patch(`http://localhost:5000/user/resetPassword/${token}`, {
        password: `${password}`,
      })
      .pipe(
        map((response) => {
          // Extract token from response and save to localStorage
          const token = response["token"];
          localStorage.setItem("access_token", token);
          console.log("reeeesss", response["token"]);

          return response;
        })
      );
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}