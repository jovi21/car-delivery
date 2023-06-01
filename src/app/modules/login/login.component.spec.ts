import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '@services/login.service';
import { mockLogin } from '@services/login.service.spec';
import { of } from 'rxjs';
 

import { LoginComponent } from './login.component';

let mockLoginService: { login: jest.Mock<any, any, any>; };
mockLoginService = {
  login: jest.fn()
}


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule, FormsModule, RouterTestingModule, LoginComponent
      ],
      providers:[
        {provide: LoginService, useValue: mockLoginService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    mockLoginService.login.mockImplementation(()=>of(mockLogin))
    fixture.detectChanges();
  });
  afterEach(()=>{
    jest.clearAllMocks();
    jest.resetAllMocks();
  })
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should to call to login service', ()=>{
    const formValue = {email:mockLogin.user.email, password: 'adjasu$A1'}
    component.loginForm.patchValue(formValue);
    component.getLogin();
    expect(mockLoginService.login).toHaveBeenCalled();
  })
});
