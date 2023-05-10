import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { RegisterpageComponent } from "./pages/registerpage/registerpage.component";
import { HomeComponent } from "./pages/HomePage/home/home.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { ChallangeDetilesComponent } from "./pages/challange-detiles/challange-detiles.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { ResetPasswordPageComponent } from "./pages/reset-password-page/reset-password-page.component";
import { ErrorNotFoundComponent } from "./pages/error-not-found/error-not-found.component";
import { DashboardAdminComponent } from "./pages/dashboard-admin/dashboard-admin.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { ForYouListComponent } from "./component/for-you-list/for-you-list.component";
import { ChallengesComponent } from "./component/challenges/challenges.component";
import { CompetitionComponent } from "./component/competition/competition.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "landing", component: LandingpageComponent },
  { path: "dashboard-admin", component: DashboardAdminComponent },
  { path: "explore", component: ForYouListComponent },
  { path: "challenges", component: CompetitionComponent },
  { path: "profile/:username", component: ProfileComponent },
  { path: "Challange/:id", component: ChallangeDetilesComponent },
  { path: "login", component: LoginPageComponent },
  { path: "register", component: RegisterpageComponent },
  { path: "reset/:token", component: ResetPasswordPageComponent },
  { path: "not-found", component: ErrorNotFoundComponent },
  { path: "**", redirectTo: "not-found" },
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
