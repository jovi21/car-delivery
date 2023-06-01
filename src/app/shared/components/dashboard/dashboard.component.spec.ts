import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockRide } from '@mocks/rides.mock';
import { RidesService } from '@services/rides.service';
import { CardDriverComponent } from '@shared/organisms/card-driver/card-driver.component';
import { CardPercentComponent } from '@shared/organisms/card-percent/card-percent.component';
import { ContenedorComponent } from '@shared/organisms/contenedor/contenedor.component';
import { of } from 'rxjs';
import { TableComponent } from '../table/table.component';

import { DashboardComponent } from './dashboard.component';
let mockRideService: { getRideList: jest.Mock<any, any, any>; };
mockRideService = {
  getRideList: jest.fn()
}
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    mockRideService.getRideList.mockImplementation(()=>of([mockRide]));

    await TestBed.configureTestingModule({
      imports: [DashboardComponent,
        CardDriverComponent,
        ContenedorComponent,
        CardPercentComponent,
        TableComponent
      ],
      providers: [
        {provide: RidesService, useValue: mockRideService}]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
