import { Component } from '@angular/core';
import { CardDriverComponent } from '@shared/organisms/card-driver/card-driver.component';
import { CardPercentComponent } from '@shared/organisms/card-percent/card-percent.component';
import { ContenedorComponent } from '@shared/organisms/contenedor/contenedor.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CardDriverComponent,
    ContenedorComponent,
    CardPercentComponent,]

})
export class DashboardComponent {

}
