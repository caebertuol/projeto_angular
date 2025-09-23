import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }


  logout(): void {
    // Remove o token do localStorage.
    localStorage.removeItem('user_token');
    // Navega para a tela de login.
    this.router.navigate(['/login']);
  }

  /**
   * Verifica se o usuário está autenticado.
   * @returns {boolean} True se o token existir, caso contrário, false.
   */
  isAuthenticated(): boolean {
    return !!localStorage.getItem('user_token');
  }
}
