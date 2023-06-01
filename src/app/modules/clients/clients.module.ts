import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from '@shared/components/button/button.component';
import { TableComponent } from '@shared/components/table/table.component';


const routes: Routes = [
  {
    path: '',
    component: ClientsComponent
  },
];

@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    ButtonComponent,
    CommonModule,
    TableComponent,
    RouterModule.forChild(routes),
  ]
})
export class ClientsModule { }
