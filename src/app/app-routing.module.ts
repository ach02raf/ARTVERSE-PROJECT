import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { RegisterpageComponent } from "./pages/registerpage/registerpage.component";
import { HomeComponent } from "./pages/HomePage/home/home.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { ResetPasswordPageComponent } from "./pages/reset-password-page/reset-password-page.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "profile", component: ProfileComponent },
  { path: "login", component: LoginPageComponent },
  { path: "register", component: RegisterpageComponent },
  { path: "reset/:token", component: ResetPasswordPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
