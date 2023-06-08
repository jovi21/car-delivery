import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockRide } from '@core/models/mocks/rides.mock';
import { RidesService } from '@modules/rides/services/rides.service';
import { of } from 'rxjs';

import { ClientsComponent } from './clients.component';
let mockRideService: { getRideList: jest.Mock<any, any, any>; };
mockRideService = {
  getRideList: jest.fn()
}

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;

  beforeEach(async () => {
    mockRideService.getRideList.mockImplementation(()=>of([mockRide]));

    await TestBed.configureTestingModule({
      declarations: [ ClientsComponent ],
      providers: [
        {provide: RidesService, useValue: mockRideService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
