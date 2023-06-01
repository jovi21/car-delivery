import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@services/login.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent {

  @Input() userName$ = this.loginService.currentUser
  .pipe(
    map(user=> user.firstName)
  )

  constructor(private router: Router, private loginService: LoginService){
  }

  logout() {
  
    sessionStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }
}
