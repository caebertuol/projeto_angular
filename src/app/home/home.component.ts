import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 import { MenuComponent } from "../menu/menu.component"; 
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MenuComponent, 
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userName: string = 'Admin';

  // Controla a visibilidade do card de boas-vindas.
  showWelcomeCard: boolean = true;

  // ---> ADICIONADO: Controla a opacidade do fundo.
  // Começa como 'true' para o fundo iniciar com a opacidade reduzida.
  isBackgroundDimmed: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  /**
   * Altera as variáveis para 'false', fazendo o card desaparecer
   * e o fundo voltar ao brilho total.
   */
  hideCard(): void {
    this.showWelcomeCard = false;
    this.isBackgroundDimmed = false; // ---> ATUALIZAMOS AQUI TAMBÉM
  }

  /**
   * Primeiro esconde o card e depois chama o serviço de logout.
   */
  logout(): void {
    this.hideCard(); // Este método já faz o que precisamos
    this.authService.logout();
  }
}