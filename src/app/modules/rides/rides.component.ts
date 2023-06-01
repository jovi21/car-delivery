import { Component } from '@angular/core';
import { Ride } from '@models/rides.interface';
import { RidesService } from '@services/rides.service';

import { Observable, tap } from 'rxjs';



@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss'],
})
export class RidesComponent {

  ridesList$: Observable<Ride[]>;

  constructor(private ridesService: RidesService){
    this.ridesList$ = this.ridesService.getRideList()
    .pipe(
      tap((data)=>console.info(data, 'data de db')));

  }

}
