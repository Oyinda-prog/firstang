import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentbudgetComponent } from './parentbudget.component';

describe('ParentbudgetComponent', () => {
  let component: ParentbudgetComponent;
  let fixture: ComponentFixture<ParentbudgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentbudgetComponent]
    });
    fixture = TestBed.createComponent(ParentbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
