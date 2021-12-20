import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { IngredientslistComponent } from './ingredientslist/ingredientslist.component';
import { PlannerComponent } from './planner/planner.component';
import { MenuComponent } from './menu/menu.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { environment as env} from '../environments/environment';
import {AuthGuard, AuthModule } from '@auth0/auth0-angular';
import { LoginButtonComponent } from './login-button/login-button.component';
import { SignupButtonComponent } from './signup-button/signup-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './authentication-button/authentication-button.component';
import { AuthNavComponent } from './auth-nav/auth-nav.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoadingComponent } from './loading/loading.component';
import { ProfileComponent } from './profile/profile.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
const routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'

  },
  {
    path: 'recipelist',
    component: RecipeListComponent
  },
  {
    path: 'recipelist/:id',
    component: RecipeDetailsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'ingredientslist',
    component: IngredientslistComponent
  },
  {
    path: 'planner',
    component: PlannerComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    HomeComponent,
    IngredientslistComponent,
    PlannerComponent,
    MenuComponent,
    RecipeDetailsComponent,
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    NavBarComponent,
    LoadingComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    NgbModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        allowedList: [`*`]
      }
    }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
