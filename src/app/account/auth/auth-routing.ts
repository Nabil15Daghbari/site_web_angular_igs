import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';

import { SignupComponent } from './signup/signup.component';
import { Recoverpwd2Component } from './recoverpwd2/recoverpwd2.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ConfirmationEmailComponent } from './confirmation-email/confirmation-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },

    {
        path: 'verify-email',
        component: VerifyEmailComponent
    },
    {
        path: 'confirmation-email',
        component: ConfirmationEmailComponent
    },
    
    {
        path: 'Mot-de-passe-oublie',
        component: Recoverpwd2Component 
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent
    },
    {
        path: 'login-2',
        component: Login2Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
