import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginService } from '@services/login.service';
import { of } from 'rxjs';

import { HeaderComponent } from './header.component';

let mockLoginService: { currentUser: {}; };
mockLoginService = {
  currentUser: of({
    firstName: 'Sierra Ferguson',
    phone: '+593 995 836 045',
    avatar: ' https://i.pravatar.cc/301'
  })
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        { provide: LoginService, useValue: mockLoginService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
