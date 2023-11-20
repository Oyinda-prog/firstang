import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetappComponent } from './budgetapp.component';

describe('BudgetappComponent', () => {
  let component: BudgetappComponent;
  let fixture: ComponentFixture<BudgetappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetappComponent]
    });
    fixture = TestBed.createComponent(BudgetappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
