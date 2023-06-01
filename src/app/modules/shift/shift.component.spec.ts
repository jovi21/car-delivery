import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShiftService } from '@services/shift.service';
import { of } from 'rxjs';

import { ShiftComponent } from './shift.component';
let mockShiftService: { getShiftList: jest.Mock<any, any, any>; };
mockShiftService = {
  getShiftList: jest.fn()
}

describe('ShiftComponent', () => {
  let component: ShiftComponent;
  let fixture: ComponentFixture<ShiftComponent>;

  beforeEach(async () => {
    mockShiftService.getShiftList.mockImplementation(()=>of([]));

    await TestBed.configureTestingModule({
      declarations: [ ShiftComponent ],
      providers: [
        {provide: ShiftService, useValue: mockShiftService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
