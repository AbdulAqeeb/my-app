import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartComponent } from './flipkart.component';

describe('FlipkartComponent', () => {
  let component: FlipkartComponent;
  let fixture: ComponentFixture<FlipkartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlipkartComponent]
    });
    fixture = TestBed.createComponent(FlipkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
