import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';

import { LoginService } from './login.service';

export const mockLogin: any = {
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhdGFAbWFpbC5jb20iLCJpYXQiOjE2ODIwMzA1MDMsImV4cCI6MTY4MjAzNDEwMywic3ViIjoiMyJ9.iFsnUXN3j81FaqMOlY8rbEVI30Yutwf07sKB2o6Wtpk",
  user: {
    email: "tata@mail.com",
    phoneNumber: "09123453131",
    role: "Visitor",
    firstName: "Tata",
    lastName: "G",
    age: 27,
    identification: "1723452931",
    id: 3
  }
}

describe('LoginService', () => {
  let service: LoginService;
  let httpController: HttpTestingController;
  let apiUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(LoginService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
