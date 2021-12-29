import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../types/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  allRecipes: Observable<Recipe[]>;
  constructor(private httpClient: HttpClient, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.allRecipes = this.recipeService.getAll();
  }

}
