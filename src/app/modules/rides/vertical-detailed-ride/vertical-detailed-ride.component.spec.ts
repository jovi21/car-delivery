import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalDetailedRideComponent } from '../vertical-detailed-ride/vertical-detailed-ride.component';

describe('VerticalDetailedRideComponent', () => {
  let component: VerticalDetailedRideComponent;
  let fixture: ComponentFixture<VerticalDetailedRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalDetailedRideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalDetailedRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
