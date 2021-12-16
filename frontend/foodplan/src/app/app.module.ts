import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular'; 
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
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    NgbModule,
    AuthModule.forRoot({
      domain: 'dev-cmwnq-gx.us.auth0.com',
      clientId: '7aNMr0cBSf44sDCR3MAi2jiLgMdK1qtL',
      audience: 'test',
      scope: 'read:current_user',
      httpInterceptor: {
        allowedList: [
          {
            uri: 'http://localhost:3000',
            tokenOptions: {
              audience: 'test',
              scope: 'test'
            }
          }
        ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
