import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogloginComponent } from './bloglogin.component';

describe('BlogloginComponent', () => {
  let component: BlogloginComponent;
  let fixture: ComponentFixture<BlogloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogloginComponent]
    });
    fixture = TestBed.createComponent(BlogloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
