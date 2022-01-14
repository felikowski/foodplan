import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IngredientslistComponent } from './ingredientslist.component';

describe('IngredientslistComponent', () => {
  let component: IngredientslistComponent;
  let fixture: ComponentFixture<IngredientslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngredientslistComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
