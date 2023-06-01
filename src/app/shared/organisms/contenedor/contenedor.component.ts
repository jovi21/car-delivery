import { Component, Input,OnInit } from '@angular/core';
import { IconComponent } from '@shared/icon/icon.component';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.scss'],
  standalone: true,
  imports:[IconComponent]
})
export class ContenedorComponent {

  @Input() name! : string;
  @Input() icon! : string;

  @Input() background: string = ''
  @Input() iconColor: string = 'var(--primary-color)';

  constructor(){}

  ngOnInit(){}

}
