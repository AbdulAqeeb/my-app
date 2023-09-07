import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevehicleComponent } from './createvehicle.component';

describe('CreatevehicleComponent', () => {
  let component: CreatevehicleComponent;
  let fixture: ComponentFixture<CreatevehicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatevehicleComponent]
    });
    fixture = TestBed.createComponent(CreatevehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
