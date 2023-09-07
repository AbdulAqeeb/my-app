import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGCNodeVComponent } from './ng-g-c-node-v.component';

describe('NgGCNodeVComponent', () => {
  let component: NgGCNodeVComponent;
  let fixture: ComponentFixture<NgGCNodeVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgGCNodeVComponent]
    });
    fixture = TestBed.createComponent(NgGCNodeVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
