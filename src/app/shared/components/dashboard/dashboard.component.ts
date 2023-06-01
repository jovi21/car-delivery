import { Component } from '@angular/core';
import { TableHeader, Ride } from '@models/rides.interface';
import { RidesService } from '@services/rides.service';
import { CardDriverComponent } from '@shared/organisms/card-driver/card-driver.component';
import { CardPercentComponent } from '@shared/organisms/card-percent/card-percent.component';
import { ContenedorComponent } from '@shared/organisms/contenedor/contenedor.component';
import { Observable, tap } from 'rxjs';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CardDriverComponent,
    ContenedorComponent,
    CardPercentComponent,
    TableComponent]

})
export class DashboardComponent {
  headersArray: TableHeader[] = [
    {label: 'user', property:'user'}, 
    {label: 'car comfort', property:'car_comfort'}, 
    {label: 'ordered time', property:'ordered_time'},
    {label: 'start location', property:'start_location'}, 
    {label: 'finish location', property:'finish_location'}, 
    {label: 'income', property:'income'}, 

  ]

  rideList$!: Observable<Ride[]>;
  totalCount = 0;

  constructor(private ridesService: RidesService){
    this.rideList$ = this.ridesService.getRideList()
    .pipe(
      tap(data=>this.totalCount = data.length));

  }
  onPageSelected(pageNumber: number) {
    console.log(pageNumber)
  }
}
