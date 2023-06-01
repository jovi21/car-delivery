import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableHeader } from '@models/rides.interface';
import { Observable } from 'rxjs';

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
