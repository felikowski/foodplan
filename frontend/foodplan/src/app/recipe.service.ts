import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { RecipeFactory } from './shared/recipe-factory';
import { Recipe } from './types/recipe';
import { RecipeRaw } from './types/recipe-raw';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>('/api/recipes').pipe(map(res => res.map((sp): Recipe => ({
      id: sp.id,
      name: sp.name,
      imagePath: sp.imagePath,
      description: sp.description,
      ingredients: sp.ingredients,
      instructions: sp.instructions,
      rating: sp.rating
    }))));
  }
  get(id: number): Observable<Recipe> {
    return this.httpClient.get<RecipeRaw>(
      `/api/recipes/${id}`
    ).pipe(
      map(recipe => RecipeFactory.fromRaw(recipe))
    );
  }
  delete(id: number) {
  }
  create(recipe: Recipe) {
  }
  update(id: number, recipe: Recipe) {

  }
}
