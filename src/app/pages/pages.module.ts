import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { PopoverModule } from "ngx-bootstrap/popover";

import { IndexComponent } from "./index/index.component";
import { ProfilepageComponent } from "./examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./registerpage/registerpage.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { LandingpageComponent } from "./examples/landingpage/landingpage.component";
import { AddPostComponent } from "../component/add-post/add-post.component";
import { HomeComponent } from "./HomePage/home/home.component";
import { ForYouListComponent } from "../component/for-you-list/for-you-list.component";
import { SearshComponent } from "../component/searsh/searsh.component";
import { CompetitionComponent } from "../component/competition/competition.component";
import { ProfileComponent } from "./profile/profile.component";
import { ResetPasswordPageComponent } from "./reset-password-page/reset-password-page.component";
import { ProjectComponent } from "../component/project/project.component";
import { FeedIdentityComponent } from "../component/feed-identity/feed-identity.component";
import { SuggestionComponent } from "../component/suggestion/suggestion.component";
import { DashboardAdminComponent } from "./dashboard-admin/dashboard-admin.component";
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";
import { AddCommentComponent } from "../component/add-comment/add-comment.component";
import { AddProjectModalComponent } from "../component/add-project-modal/add-project-modal.component";
import { AllUsersComponent } from "../component/all-users/all-users.component";
import { ChallengesComponent } from '../component/challenges/challenges.component';

import { AddChallengeComponent } from '../component/add-challenge/add-challenge.component';
import { EditChallengeComponent } from '../component/edit-challenge/edit-challenge.component';
import { ShowChallengeComponent } from '../component/show-challenge/show-challenge.component';
import { ChallangeDetilesComponent } from './challange-detiles/challange-detiles.component';
import { RepotedPostComponent } from '../component/repoted-post/repoted-post.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    NgbCollapseModule,
  ],
  declarations: [
    IndexComponent,
    ProfilepageComponent,
    RegisterpageComponent,
    LoginPageComponent,
    LandingpageComponent,
    HomeComponent,
    ForYouListComponent,
    AddPostComponent,
    SearshComponent,
    CompetitionComponent,
    ProfileComponent,
    ResetPasswordPageComponent,
    FeedIdentityComponent,
    ProjectComponent,
    SuggestionComponent,
    DashboardAdminComponent,
    AddCommentComponent,
    AddProjectModalComponent,
    AllUsersComponent,
    ChallengesComponent,

    AddChallengeComponent,

    EditChallengeComponent,

    ShowChallengeComponent,
    RepotedPostComponent,

    ChallangeDetilesComponent,

  ],
  exports: [
    IndexComponent,
    ProfilepageComponent,
    RegisterpageComponent,
    LandingpageComponent,
  ],
  providers: [],
})
export class PagesModule {}
