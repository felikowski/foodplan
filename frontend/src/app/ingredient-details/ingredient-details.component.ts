import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from '../types/Ingredient';

@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.scss'],
})
export class IngredientDetailsComponent implements OnInit {
  ingredient: Observable<Ingredient>;

  json: JSON;

  constructor(public route: ActivatedRoute, private ingredientService: IngredientService) {
    this.json = JSON;
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ingredient = this.ingredientService.get(id);
  }
}
