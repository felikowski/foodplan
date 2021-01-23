import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from './types/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Recipe[]> {
    let recipes: Recipe[];
    return this.httpClient.get<Recipe[]>('/api/recipes').pipe(map(res => res.map((sp): Recipe => ({
      id: sp.id,
      name: sp.name,
      image_path: sp.image_path,
      description: sp.description,
      ingredients: sp.ingredients,
      instructions: sp.instructions,
      rating: sp.rating
    }))));
  }
  get(id: number): Observable<String> {
    return null;
  }
  delete(id: number) {
  }
  create(recipe: Recipe) {
  }
  update(id: number, recipe: Recipe) {

  }
}
