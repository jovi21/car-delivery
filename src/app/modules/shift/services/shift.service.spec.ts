import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { environment } from "../../../../environments/environment";
import { mockShift } from '@core/models/mocks/rides.mock';
import { ShiftService } from '@modules/shift/services/shift.service';



const mockShiftList: any[] = [mockShift];

describe('ShiftService', () => {
  let service: ShiftService;
  let httpController: HttpTestingController;
  let apiUrl = environment.apiUrl + 'shift';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ShiftService);
    httpController = TestBed.inject(HttpTestingController);

  });
  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get a list of shifts', (doneFn) => {
    service.getShiftList()
      .subscribe(data => {
        expect(data).toEqual(mockShiftList);
        doneFn();
      });
    const url = apiUrl;
    const req = httpController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mockShiftList)
  });
});
