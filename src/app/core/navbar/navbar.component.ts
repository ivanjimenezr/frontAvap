import { Component } from '@angular/core';
import { AuthService } from '../../pages/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.doLogout();
  }
}
