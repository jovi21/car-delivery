import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RidesComponent} from './rides.component';
import { ProgresivebarRidesComponent } from './progresivebar-rides/progresivebar-rides.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: RidesComponent }
]


@NgModule({
  declarations: [
    RidesComponent,
    ProgresivebarRidesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class RidesModule { }