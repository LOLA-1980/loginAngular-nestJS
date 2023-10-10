import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  username: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Verifica si el usuario está autenticado antes de obtener el nombre de usuario
    if (this.authService.isAuthenticatedUser()) {
      this.username = this.authService.getUsername();
      console.log('Nombre de usuario:', this.username);
    }
  }
}
