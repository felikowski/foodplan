import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {


  httpResponse: Observable<String>;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpResponse = this.httpClient.get('/api', {responseType: 'text'});
  }

}
