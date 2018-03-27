import { Routes, RouterModule} from '@angular/router';


export const FULL_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
];
