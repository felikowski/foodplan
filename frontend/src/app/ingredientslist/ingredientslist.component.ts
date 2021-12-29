import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from '../types/ingredient';
@Component({
  selector: 'app-ingredientslist',
  templateUrl: './ingredientslist.component.html',
  styleUrls: ['./ingredientslist.component.scss']
})
export class IngredientslistComponent implements OnInit {

  allIngredients: Observable<Ingredient[]>;
  constructor(private httpClient: HttpClient, private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.allIngredients = this.ingredientService.getAll();
  }
}
