import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresivebarRidesComponent } from './progresivebar-rides.component';

describe('ProgresivebarRidesComponent', () => {
  let component: ProgresivebarRidesComponent;
  let fixture: ComponentFixture<ProgresivebarRidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgresivebarRidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgresivebarRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
