import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBody2Component } from './blog-body2.component';

describe('BlogBody2Component', () => {
  let component: BlogBody2Component;
  let fixture: ComponentFixture<BlogBody2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBody2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogBody2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
