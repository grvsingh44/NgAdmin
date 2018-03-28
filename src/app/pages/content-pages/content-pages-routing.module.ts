import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ComingSoonPageComponent} from './coming-soon-page/coming-soon-page.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ForgotPasswordPageComponent} from './forgot-password-page/forgot-password-page.component';
import {LockScreenPageComponent} from './lock-screen-page/lock-screen-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {MaintenancePageComponent} from './maintenance-page/maintenance-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'comingsoon',
        component: ComingSoonPageComponent,
        data: {
          title: 'Coming Soon page'
        }
      },
      {
        path: 'error',
        component: ErrorPageComponent,
        data: {
          title: 'Error Page'
        }
      },
      {
        path: 'forgotpassword',
        component: ForgotPasswordPageComponent,
        data: {
          title: 'Forgot Password Page'
        }
      },
      {
        path: 'lockscreen',
        component: LockScreenPageComponent,
        data: {
          title: 'Lock Screen page'
        }
      },
      {
        path: 'login',
        component: LoginPageComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'maintenance',
        component: MaintenancePageComponent,
        data: {
          title: 'Maintenance Page'
        }
      },
      {
        path: 'register',
        component: RegisterPageComponent,
        data: {
          title: 'Register Page'
        }
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ContentPagesRoutingModule { }
