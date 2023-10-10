import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  // Define propiedades o métodos en tu componente para manejar el inicio de sesión
  username: string = '';
  password: string = '';

  login() {
    // Llama a la función de inicio de sesión en el servicio
    const isAuthenticated = this.authService.login(
      this.username,
      this.password
    );
    if (isAuthenticated) {
      // Redirige al usuario a la página de Dashboard-Home una vez iniciada la sesión
      this.router.navigate(['/home']);
    } else {
      console.log('El inicio de sesión falló');
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
