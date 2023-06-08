import { Component, Input } from '@angular/core';
import { IconComponent } from '@shared/icon/icon.component';

@Component({
  selector: 'app-card-percent',
  templateUrl: './card-percent.component.html',
  styleUrls: ['./card-percent.component.scss'],
  standalone: true,
  imports:[    IconComponent]
})
export class CardPercentComponent {
  @Input() iconName: string = 'icon-map';

}
