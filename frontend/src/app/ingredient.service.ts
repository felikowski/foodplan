import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IngredientFactory } from './shared/ingredient-factory';
import { Ingredient } from './types/Ingredient';
import { IngredientRaw } from './types/IngredientRaw';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Ingredient[]> {
    return this.httpClient.get<IngredientRaw[]>('/api/ingredients').pipe(
      map((res) => res.map(
        (sp): Ingredient => ({
          id: sp.id,
          name: sp.name,
          description: sp.description,
          standardUnit: sp.standardUnitId,
          imagePath: sp.imagePath,
          usualDurability: sp.usualDurability,
        }),
      )),
    );
  }

  get(id: number): Observable<Ingredient> {
    return this.httpClient
      .get<IngredientRaw>(`/api/ingredients/${id}`)
      .pipe(map((ingredient) => IngredientFactory.fromRaw(ingredient)));
  }

  insert(body: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.httpClient.post<Ingredient>('api/ingredients', body, { headers }).subscribe();
  }
}
