import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  findUserById(id: any) {
    return this.http.get(
      `https://artverse-project-api-nodejs.onrender.com/user/getUserById/${id}`
    );
  }

  findUserByUsername(username: any) {
    return this.http.get(
      `https://artverse-project-api-nodejs.onrender.com/user/getUserByUsername/${username}`
    );
  }

  getAllUsers() {
    return this.http.get(
      `https://artverse-project-api-nodejs.onrender.com/user/UserList`
    );
  }

  updatefollow(body: any) {
    return this.http.post(
      `https://artverse-project-api-nodejs.onrender.com/user/ajouterAbonnes`,
      body
    );
  }

  removefollow(body: any) {
    return this.http.post(
      `https://artverse-project-api-nodejs.onrender.com/user/supprimerAbonnes`,
      body
    );
  }
}
