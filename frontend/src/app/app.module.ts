import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard, AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { HomeComponent } from './home/home.component';
import { IngredientslistComponent } from './ingredientslist/ingredientslist.component';
import { PlannerComponent } from './planner/planner.component';
import { MenuComponent } from './menu/menu.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './login-button/login-button.component';
import { SignupButtonComponent } from './signup-button/signup-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './authentication-button/authentication-button.component';
import { AuthNavComponent } from './auth-nav/auth-nav.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoadingComponent } from './loading/loading.component';
import { ProfileComponent } from './profile/profile.component';
import { IngredientInsertFormComponent } from './ingredient-insert-form/ingredient-insert-form.component';
import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';
import { RecipeDetailsFormsComponent } from './recipe-details-forms/recipe-details-forms.component';

const routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'recipelist',
    component: RecipeListComponent,
  },
  {
    path: 'recipelist/:id',
    component: RecipeDetailsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'ingredientslist',
    component: IngredientslistComponent,
  },
  {
    path: 'add-ingredient',
    component: IngredientInsertFormComponent,
  },
  {
    path: 'ingredientslist/:id',
    component: IngredientDetailsComponent,
  },
  {
    path: 'planner',
    component: PlannerComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
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
    ProfileComponent,
    IngredientInsertFormComponent,
    IngredientDetailsComponent,
    RecipeDetailsFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    NgbModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        allowedList: ['*'],
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
