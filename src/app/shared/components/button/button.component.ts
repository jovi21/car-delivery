import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ButtonComponent {
  @Input() idBtn: string = 'id-btn';
  @Input() border: string = 'solid 1px var(--dark-color)';
  @Input() width: string = 'auto';
  @Input() height: string = 'auto';
  @Input() color: string = 'var(--dark-color)';
  @Input() background: string = 'transparent';
  @Input() name: string = 'button-name'
  
}
