import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockRide } from '@core/models/mocks/rides.mock';
import { RidesService } from '@modules/rides/services/rides.service';
import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';
let mockRideService: { getRideList: jest.Mock<any, any, any>; };
mockRideService = {
  getRideList: jest.fn()
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    mockRideService.getRideList.mockImplementation(() => of([mockRide]));

    await TestBed.configureTestingModule({
      providers: [
        { provide: RidesService, useValue: mockRideService }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
   
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
