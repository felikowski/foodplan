import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ingredient-insert-form',
  templateUrl: './ingredient-insert-form.component.html',
  styleUrls: ['./ingredient-insert-form.component.scss']
})
export class IngredientInsertFormComponent implements OnInit {
  numberRegEx = /^\d+$/;
  units: any = [{id:1, name:'Stück'}, {id:2, name:'Kilogramm'}, {id:3, name:'Gramm'}, {id:4, name:'Mililiter'}];
  ingredientForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description:new FormControl('', Validators.required),
    standardUnitId: new FormControl('', Validators.required),
    imagePath: new FormControl('', Validators.required),
    usualDurability: new FormControl('', {validators: [Validators.required, Validators.pattern(this.numberRegEx)]}),
  });

  changeUnit(e) {
    this.ingredientForm.get('standardUnitId').setValue(e.target.value, {onlySelf: true});
  }
  onSubmit() {
    this.ingredientService.insert(JSON.stringify(this.ingredientForm.getRawValue()));
  }
  constructor(private formBuilder: FormBuilder, private ingredientService: IngredientService) { }

  ngOnInit(): void {
  }

}
