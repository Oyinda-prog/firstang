import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloguserdashboardComponent } from './bloguserdashboard.component';

describe('BloguserdashboardComponent', () => {
  let component: BloguserdashboardComponent;
  let fixture: ComponentFixture<BloguserdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloguserdashboardComponent]
    });
    fixture = TestBed.createComponent(BloguserdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
