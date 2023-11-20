import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallchildComponent } from './smallchild.component';

describe('SmallchildComponent', () => {
  let component: SmallchildComponent;
  let fixture: ComponentFixture<SmallchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallchildComponent]
    });
    fixture = TestBed.createComponent(SmallchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
