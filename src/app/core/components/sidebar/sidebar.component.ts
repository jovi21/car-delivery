import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { IconComponent } from '@shared/icon/icon.component';
import { SidebarRoutes } from '../../models/const/sidebar.const';
import { LoginService } from '@core/services/login.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, IconComponent, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  menuOptions = SidebarRoutes;
  userName$ = this.loginService.currentUser
  .pipe(
    map(user=> user.firstName)
  )


  constructor(private router: Router, private loginService: LoginService){
    
  }

  isActiveRoute(route: string): boolean {
    return this.router.isActive(route, true);
  }
  
}
