import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class IconComponent {
  @Input() name!: string;
  @Input() width!: string;
  @Input() height!: string;
  @Input() color!: string;
}
