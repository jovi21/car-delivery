import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '../../environments/environment';

import { ModeratorService } from '../../app/services/moderator.service';
import { mockModerator } from '@mocks/moderator.mock';

const mockModeratorList: any[] = [mockModerator]; 

describe('ModeratorService', () => {
  let service: ModeratorService;
  let httpController: HttpTestingController;
  let apiUrl = environment.apiUrl;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ModeratorService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a list of moderators', (doneFn) => {
    service.getmoderatorsList()
      .subscribe(data => {
        expect(data).toEqual(mockModeratorList);
        doneFn();
      });
    const url = `${apiUrl}moderators`;
    const req = httpController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mockModeratorList)
  });
});
