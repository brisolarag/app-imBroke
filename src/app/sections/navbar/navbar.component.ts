import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor (private _router: Router) {}

  navigateSignIn() {
    this._router.navigateByUrl("/signin");
  }


  navigateSignUp() {
    this._router.navigateByUrl("/signup");
  }
}
