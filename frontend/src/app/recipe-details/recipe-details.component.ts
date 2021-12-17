import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../types/recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(public route: ActivatedRoute, private recipeService: RecipeService) { }
  recipe: Observable<Recipe>;
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipe = this.recipeService.get(id);
  }
}
