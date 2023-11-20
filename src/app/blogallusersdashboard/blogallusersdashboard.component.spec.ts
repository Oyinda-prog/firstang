import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogallusersdashboardComponent } from './blogallusersdashboard.component';

describe('BlogallusersdashboardComponent', () => {
  let component: BlogallusersdashboardComponent;
  let fixture: ComponentFixture<BlogallusersdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogallusersdashboardComponent]
    });
    fixture = TestBed.createComponent(BlogallusersdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
