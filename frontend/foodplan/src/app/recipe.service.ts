import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { RecipeFactory } from './shared/recipe-factory';
import { Recipe } from './types/recipe';
import { RecipeRaw } from './types/recipe-raw';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }
  getAll(): Observable<Recipe[]> {
    this.authService.idTokenClaims$.subscribe(x => console.log(x.__raw));
    return this.httpClient.get<Recipe[]>('/api/recipes', {headers: new HttpHeaders().set('Authorization', `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InY5UzBaS2tLc3ZseFVOM0RzTDNpSyJ9.eyJuaWNrbmFtZSI6ImYuZ2xvZWNrbmVyIiwibmFtZSI6ImYuZ2xvZWNrbmVyQGdteC5uZXQiLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvYTgzMDhlZGJmMDFiYTAzMTE3NjVjOGNhYmVjYjI1N2M_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZmLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIxLTEwLTI3VDIyOjM1OjEzLjAzMFoiLCJlbWFpbCI6ImYuZ2xvZWNrbmVyQGdteC5uZXQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9kZXYtY213bnEtZ3gudXMuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDYxNzlhOWJlMDJiM2RkMDA3MWNlZjIzZCIsImF1ZCI6IjdhTk1yMGNCU2Y0NHNEQ1IzTUFpMmppTGdNZEsxcXRMIiwiaWF0IjoxNjM1Mzc0NDc4LCJleHAiOjE2MzU0MTA0NzgsIm5vbmNlIjoiYXpaUlFWTjNYelZJWmw5dlpsWnNkekJFTVZscFRISmtXRVZUVVY5d2NVOXhPVmhqYzA1SVUyWTFRdz09In0.ECKxuhor_87CCOeMBndT882jAlSJyiV3hJ9ElSn6g1HEPBR2yts_g1xKe5ctdMUrJTCIugL3ed_J9TC-Qkj796eFSq7l8kHDVnqpQb44BXxuGM16LDnUnAeyiTsPgXf6a9kHGsWo3oDLXh7gu4ql8oGBNgPifEGeB2dX3Sn_Qv7FboFAKfW50SwyT2JhNWKaoQNDmpsDRPuTi8vwtXeMH5K7qlCnUtMqzt5DFnFvBDTOri--bpE78nOjErf5WovZUN2fRyoGiI1MrVdgxH76hT6vo_W9cW4CLFonjytgeriUMeGlMniDr-LRJMKXclv_4mYNzh0Qdwjn3d4XbpwdnQ`)}).pipe(map(res => res.map((sp): Recipe => ({
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
