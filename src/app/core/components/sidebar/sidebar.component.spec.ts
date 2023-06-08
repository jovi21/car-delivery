import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IconComponent } from '@shared/icon/icon.component';
import { SidebarComponent } from './sidebar.component';
import { of } from 'rxjs';
import { LoginService } from '@core/services/login.service';


let mockLoginService: { currentUser: {}; };
mockLoginService = {
  currentUser: of({
    firstName: 'Sierra Ferguson',
    phone: '+593 995 836 045',
    avatar: ' https://i.pravatar.cc/301'
  })
}

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule],
      providers: [
        { provide: LoginService, useValue: mockLoginService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly check if a route is active', () => {
  
    // Arrange
    const routerSpy = jest.spyOn(router, 'isActive');
  
    // Act
    component.isActiveRoute('/rides');
  
    // Assert
    expect(routerSpy).toHaveBeenCalledWith('/rides', true);
  });
});
