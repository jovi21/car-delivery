import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { IconComponent } from '@shared/icon/icon.component';
import { SidebarRoutes } from '../../../const/sidebar.const';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, IconComponent, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {


  constructor(private router: Router){
    console.log(this.router.url)
  }

  activated = this.router.url;

  menuOptions = SidebarRoutes;
  
}
