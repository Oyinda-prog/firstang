import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newstate2Component } from './newstate2.component';

describe('Newstate2Component', () => {
  let component: Newstate2Component;
  let fixture: ComponentFixture<Newstate2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Newstate2Component]
    });
    fixture = TestBed.createComponent(Newstate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
