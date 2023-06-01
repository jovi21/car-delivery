import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-driver',
  templateUrl: './card-driver.component.html',
  styleUrls: ['./card-driver.component.scss'],
  standalone: true
})
export class CardDriverComponent {
  @Input() image!: string
  @Input() name!: string
  @Input() phone!: string
  @Input() orders!: string
  @Input() income!: string
}
