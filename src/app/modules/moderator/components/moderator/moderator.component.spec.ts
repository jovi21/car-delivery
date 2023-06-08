// angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockModerator } from '@core/models/mocks/moderator.mock';
// rxjs
import { of } from 'rxjs';
// moderator
import { ModeratorService } from '../../services/moderator.service';
import { ModeratorComponent } from './moderator.component';


let mockModeratorsService: { getmoderatorsList: jest.Mock<any, any, any>; };
mockModeratorsService = {
  getmoderatorsList: jest.fn()
}
describe('ModeratorComponent', () => {
  let component: ModeratorComponent;
  let fixture: ComponentFixture<ModeratorComponent>;

  beforeEach(async () => {
    mockModeratorsService.getmoderatorsList.mockImplementation(()=>of([mockModerator]))
    await TestBed.configureTestingModule({
      declarations: [ ModeratorComponent ],
      providers:[
        {
          provide: ModeratorService, useValue: mockModeratorsService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
