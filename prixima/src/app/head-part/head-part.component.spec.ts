import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadPartComponent } from './head-part.component';

describe('HeadPartComponent', () => {
  let component: HeadPartComponent;
  let fixture: ComponentFixture<HeadPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
