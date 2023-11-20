import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigparentComponent } from './bigparent.component';

describe('BigparentComponent', () => {
  let component: BigparentComponent;
  let fixture: ComponentFixture<BigparentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigparentComponent]
    });
    fixture = TestBed.createComponent(BigparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
