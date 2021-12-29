import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientInsertFormComponent } from './ingredient-insert-form.component';

describe('IngredientInsertFormComponent', () => {
  let component: IngredientInsertFormComponent;
  let fixture: ComponentFixture<IngredientInsertFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientInsertFormComponent ]
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
