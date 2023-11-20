import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetparentComponent } from './budgetparent.component';

describe('BudgetparentComponent', () => {
  let component: BudgetparentComponent;
  let fixture: ComponentFixture<BudgetparentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetparentComponent]
    });
    fixture = TestBed.createComponent(BudgetparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
