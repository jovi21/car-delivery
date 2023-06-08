import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guard/auth.guard';
import { LoginComponent } from '@core/components/login/login.component';
import { LayoutComponent } from '@core/components/layout/layout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: LayoutComponent,
    canActivate: [AuthGuard], 
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('@modules/dashboard/dashboard.component')
            .then((c) => c.DashboardComponent),
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('@modules/clients/clients.module')
            .then((m) => m.ClientsModule),
      },
      {
        path: 'moderators',
        loadChildren: () =>
          import('@modules/moderator/moderator.module')
            .then((m) => m.ModeratorModule),
      },
      {
        path: 'shift',
        loadChildren: () => import('@modules/shift/shift.module')
          .then((m) => m.ShiftModule),
      },
      {
        path: 'rides',
        loadChildren: () => import('@modules/rides/rides.module')
          .then((m) => m.RidesModule)
      },
      
    ]
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
