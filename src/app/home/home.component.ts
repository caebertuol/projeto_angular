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
  
  // Esta variável controlará a visibilidade do card de boas-vindas.
  // Ela começa como 'true' para que o card seja exibido ao carregar a página.
  showWelcomeCard: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  /**
   * Altera a variável para 'false', fazendo o card desaparecer da tela.
   */
  hideCard(): void {
    this.showWelcomeCard = false;
  }

  /**
   * Primeiro esconde o card e depois chama o serviço de logout.
   */
  logout(): void {
    this.hideCard();
    this.authService.logout();
  }
}

