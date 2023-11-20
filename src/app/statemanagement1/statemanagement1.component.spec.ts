import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statemanagement1Component } from './statemanagement1.component';

describe('Statemanagement1Component', () => {
  let component: Statemanagement1Component;
  let fixture: ComponentFixture<Statemanagement1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Statemanagement1Component]
    });
    fixture = TestBed.createComponent(Statemanagement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
