import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParComponent } from './par.component';

describe('ParComponent', () => {
  let component: ParComponent;
  let fixture: ComponentFixture<ParComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParComponent]
    });
    fixture = TestBed.createComponent(ParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
