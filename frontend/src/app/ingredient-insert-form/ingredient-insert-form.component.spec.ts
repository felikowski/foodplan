import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientInsertFormComponent } from './ingredient-insert-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('IngredientInsertFormComponent', () => {
  let component: IngredientInsertFormComponent;
  let fixture: ComponentFixture<IngredientInsertFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule],
      declarations: [ IngredientInsertFormComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientInsertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
