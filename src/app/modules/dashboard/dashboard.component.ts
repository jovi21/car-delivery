import { Component, OnInit } from '@angular/core';
import { TableHeader, Ride } from '@core/models/interfaces/rides.interface';
import { RidesService } from '@modules/rides/services/rides.service';
import { CardDriverComponent } from '@shared/organisms/card-driver/card-driver.component';
import { CardPercentComponent } from '@shared/organisms/card-percent/card-percent.component';
import { ContenedorComponent } from '@shared/organisms/contenedor/contenedor.component';
import { EMPTY, Observable } from 'rxjs';
import { TableComponent } from '../../shared/components/table/table.component';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    CardDriverComponent,
    ContenedorComponent,
    CardPercentComponent,
    TableComponent]
})
export class DashboardComponent  {
  headersArray: TableHeader[] = [
    {label: 'user', property:'user'}, 
    {label: 'car comfort', property:'car_comfort'}, 
    {label: 'ordered time', property:'ordered_time'},
    {label: 'start location', property:'start_location'}, 
    {label: 'finish location', property:'finish_location'}, 
    {label: 'income', property:'income'}, 

  ]

  rideList$: Observable<Ride[]>  = EMPTY;
  

  constructor(private ridesService: RidesService){
    this.rideList$ = this.ridesService.getRideList()
  }
  
  onPageSelected(pageNumber: number) {
    console.log(pageNumber)
  }
}
