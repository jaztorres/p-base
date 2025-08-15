import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
 
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

 // Puedes manejar lógica como el estado de autenticación aquí.
  isLoggedIn = false;
  
  // Definimos la estructura de nuestros enlaces.
  // Esto hace que el menú sea dinámico y fácil de mantener.
  navLinks = [
    
    { label: 'Mecánica', path: '/home', fragment:'meca'},
    { label: 'Registro', path: '/registro' },
    { label: 'Premios', path: '/home', fragment:'premio'},
    { label: 'Ganadores', path: '/home' , fragment:'gana' }
  ];

   isMenuOpen = false;
}
