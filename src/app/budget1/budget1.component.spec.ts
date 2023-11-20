import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Budget1Component } from './budget1.component';

describe('Budget1Component', () => {
  let component: Budget1Component;
  let fixture: ComponentFixture<Budget1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Budget1Component]
    });
    fixture = TestBed.createComponent(Budget1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
