import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.scss'],
  standalone: true
})
export class ContenedorComponent {

  @Input() name! : string;
  constructor(){}

  ngOnInit(){}

}
