import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { InputComponent } from './shared/components/input/input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'car-delivery';
  customInputFormControl = new FormControl(null, Validators.minLength(7));
}
