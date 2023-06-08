import { Component } from '@angular/core';
import { TableHeader, Ride } from '@core/models/interfaces/rides.interface';
import { RidesService } from '@modules/rides/services/rides.service';
import { Observable, tap } from 'rxjs';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  headersArray: TableHeader[] = [
    {label: 'user', property:'user'}, 
    {label: 'car comfort', property:'car_comfort'}, 
    {label: 'ordered time', property:'ordered_time'},
    {label: 'start location', property:'start_location'}, 
    {label: 'finish location', property:'finish_location'}, 
    {label: 'income', property:'income'}, 

  ]
  totalCount = 0;
  clientsList$: Observable<Ride[]>;

  constructor(private ridesService: RidesService){
    this.clientsList$ = this.ridesService.getRideList()
    .pipe(
      tap(data=>this.totalCount = data.length));
    

  }
  onPageSelected(pageNumber: number) {
    console.log(pageNumber)
  }
}
