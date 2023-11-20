import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninreactiveComponent } from './signinreactive.component';

describe('SigninreactiveComponent', () => {
  let component: SigninreactiveComponent;
  let fixture: ComponentFixture<SigninreactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninreactiveComponent]
    });
    fixture = TestBed.createComponent(SigninreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
