import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeratorComponent } from './components/moderator/moderator.component';


import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ModeratorComponent
  },
];

@NgModule({
  declarations: [
    ModeratorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ModeratorModule { }
