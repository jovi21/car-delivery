import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableHeader } from '@core/models/interfaces/rides.interface';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TableComponent {
@Input() arrayName$!: Observable<any[]>;
@Input() tableHeaders: TableHeader[] = [];
@Input() totalUsers: number = 98;
@Output() pageSelected = new EventEmitter<number>();


}
