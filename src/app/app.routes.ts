import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './sections/main/home/home.component';

export const routes: Routes = 
[
    {path: 'signin', component: LoginComponent},
    {path: 'signup', component: SignupComponent},

    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];
