import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports:[ReactiveFormsModule, CommonModule]
})
export class InputComponent {

@Input() minLength: number = 5;
@Input() pattern: string = 'Debe contener...';

@Input() label: string = 'Label';
@Input() placeholder: string = 'Write a placeholder hear...';
@Input() formControl!: FormControl;

}
