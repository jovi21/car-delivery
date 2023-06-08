import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule]
    });
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access if user and token are present', () => {
    // Simular el almacenamiento de sesión con user y token presentes
    sessionStorage.setItem('user', 'username');
    sessionStorage.setItem('token', 'token123');
    const routerSpy = jest.spyOn(router, 'navigate')

    const canActivate = guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);

    expect(canActivate).toBeTruthy();
    expect(routerSpy ).not.toHaveBeenCalled(); // Verificar que no se haya llamado a la función navigate
  });
  
  it('should redirect to login if user or token are missing', () => {
    // Simular el almacenamiento de sesión sin user o token
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');

    const routerSpy = jest.spyOn(router, 'navigate')
    .mockImplementation(()=> Promise.resolve(true))

    const canActivate = guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);


    expect(canActivate).toBeFalsy();
    expect(routerSpy).toHaveBeenCalled(); 
  });
});
