import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Budget2Component } from './budget2.component';

describe('Budget2Component', () => {
  let component: Budget2Component;
  let fixture: ComponentFixture<Budget2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Budget2Component]
    });
    fixture = TestBed.createComponent(Budget2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
