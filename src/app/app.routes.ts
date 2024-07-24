import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = 
[
    {path: 'signin', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
];
