import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftComponent } from './shift.component';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@shared/components/button/button.component';
import { InputComponent } from '@shared/components/input/input.component';
import { TableComponent } from '@shared/components/table/table.component';
import { IconComponent } from '@shared/icon/icon.component';


const routes: Routes = [
  {
    path: '',
    component: ShiftComponent
  },
];

@NgModule({
  declarations: [
    ShiftComponent
  ],
  imports: [
    ButtonComponent,
    CommonModule,
    IconComponent,
    InputComponent,
    ReactiveFormsModule,
    TableComponent,
    RouterModule.forChild(routes),
  ]
})
export class ShiftModule { }
