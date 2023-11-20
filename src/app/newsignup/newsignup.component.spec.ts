import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsignupComponent } from './newsignup.component';

describe('NewsignupComponent', () => {
  let component: NewsignupComponent;
  let fixture: ComponentFixture<NewsignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsignupComponent]
    });
    fixture = TestBed.createComponent(NewsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
