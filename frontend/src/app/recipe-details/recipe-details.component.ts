import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import JSPDF from 'jspdf';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../types/recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  @ViewChild('content') content: ElementRef;

  recipe: Observable<Recipe>;

  json: JSON;

  constructor(public route: ActivatedRoute, private recipeService: RecipeService) {
    this.json = JSON;
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipe = this.recipeService.get(id);
  }

  generatePdf(): void {
    const content = this.content.nativeElement;
    const doc = new JSPDF();
    console.log(content.innerHTML);
    doc.html(content.innerHTML, {
      callback(test) {
        test.save('test.pdf');
      },
      x: 10,
      y: 10,
    });
  }
}
