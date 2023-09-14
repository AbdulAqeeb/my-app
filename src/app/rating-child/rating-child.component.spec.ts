import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingChildComponent } from './rating-child.component';

describe('RatingChildComponent', () => {
  let component: RatingChildComponent;
  let fixture: ComponentFixture<RatingChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingChildComponent]
    });
    fixture = TestBed.createComponent(RatingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
