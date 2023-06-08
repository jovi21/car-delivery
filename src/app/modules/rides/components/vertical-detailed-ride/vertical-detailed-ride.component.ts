import { Component } from '@angular/core';
import {TimelineService} from '../../../../shared/services/timeline.service';
@Component({
  selector: 'app-vertical-detailed-ride',
  templateUrl: './vertical-detailed-ride.component.html',
  styleUrls: ['./vertical-detailed-ride.component.scss']
})
export class VerticalDetailedRideComponent {
  constructor(TimelineService:TimelineService){

  }
}
