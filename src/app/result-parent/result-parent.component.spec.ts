import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultParentComponent } from './result-parent.component';

describe('ResultParentComponent', () => {
  let component: ResultParentComponent;
  let fixture: ComponentFixture<ResultParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultParentComponent]
    });
    fixture = TestBed.createComponent(ResultParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
