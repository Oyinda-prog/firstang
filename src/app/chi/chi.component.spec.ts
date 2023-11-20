import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiComponent } from './chi.component';

describe('ChiComponent', () => {
  let component: ChiComponent;
  let fixture: ComponentFixture<ChiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChiComponent]
    });
    fixture = TestBed.createComponent(ChiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
