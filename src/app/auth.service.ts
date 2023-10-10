import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private username: string = '';

  login(username: string, password: string): boolean {
    // Lógica para verificar las credenciales del usuario (puede ser una llamada a una API)
    if (username === 'a' && password === 'b') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  // Método para obtener el nombre de usuario
  getUsername(): string {
    console.log('Nombre de usuario en AuthService:', this.username);
    return this.username;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
