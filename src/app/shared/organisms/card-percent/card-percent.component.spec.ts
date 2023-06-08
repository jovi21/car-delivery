import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from '@shared/icon/icon.component';

import { CardPercentComponent } from './card-percent.component';

describe('CardPercentComponent', () => {
  let component: CardPercentComponent;
  let fixture: ComponentFixture<CardPercentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
