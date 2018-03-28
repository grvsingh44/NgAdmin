import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ContentPagesRoutingModule} from './content-pages-routing.module';

import { ComingSoonPageComponent} from './coming-soon-page/coming-soon-page.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { LockScreenPageComponent } from './lock-screen-page/lock-screen-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MaintenancePageComponent } from './maintenance-page/maintenance-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  imports: [
    CommonModule,
    ContentPagesRoutingModule,
    FormsModule
  ],
  declarations: [
    ComingSoonPageComponent,
    ErrorPageComponent,
    ForgotPasswordPageComponent,
    LockScreenPageComponent,
    LoginPageComponent,
    MaintenancePageComponent,
    RegisterPageComponent
  ]
})
export class ContentPagesModule { }
