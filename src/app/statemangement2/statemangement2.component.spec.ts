import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statemangement2Component } from './statemangement2.component';

describe('Statemangement2Component', () => {
  let component: Statemangement2Component;
  let fixture: ComponentFixture<Statemangement2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Statemangement2Component]
    });
    fixture = TestBed.createComponent(Statemangement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
