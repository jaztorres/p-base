import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { BootstrapModal } from 'bootstrap'; // Para modal, importa si usas JS

@Component({
  selector: 'app-ticket-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ticket.component.html',
  styles: './ticket.component.css'
})
export class TicketRegistrationComponent {
  currentView: string = 'create'; // Inicial: 'create', 'login', 'ticket', 'list'
  headerLeft: string = 'Crear una cuenta';
  headerRight: string = 'Iniciar sesión';
  userName: string = '';
  tickets: any[] = [];
  fileName: string = 'Ningún archivo seleccionado';

  createForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    address: ['', Validators.required],
    state: ['', Validators.required],
    phone: ['', Validators.required],
    accept: [false, Validators.requiredTrue]
  });

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  ticketForm = this.fb.group({
    store: ['', Validators.required],
    date: ['', Validators.required],
    ticketNo: ['', Validators.required],
    file: [null]
  });

  constructor(private fb: FormBuilder) {
    // Carga tickets de localStorage
    this.tickets = JSON.parse(localStorage.getItem('tickets') || '[]');
  }

  toggleView() {
    if (this.currentView === 'create') {
      this.currentView = 'login';
      this.headerLeft = 'Iniciar sesión';
      this.headerRight = 'Crear cuenta';
    } else {
      this.currentView = 'create';
      this.headerLeft = 'Crear una cuenta';
      this.headerRight = 'Iniciar sesión';
    }
  }

  onCreateAccount() {
    if (this.createForm.valid) {
      // Simula creación: guarda en localStorage
      localStorage.setItem('user', JSON.stringify({
        name: this.createForm.value.fullName,
        email: this.createForm.value.email,
        // No guardar password en prod!
      }));
      this.userName = this.createForm.value.fullName || '';
      this.currentView = 'ticket';
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      // Simula login: asume match con localStorage
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      if (user.email === this.loginForm.value.email) {
        this.userName = user.name;
        this.currentView = 'ticket';
      } else {
        alert('Credenciales inválidas');
      }
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.fileName = event.target.files[0].name;
      this.ticketForm.patchValue({ file: event.target.files[0] });
    }
  }

  onSubmitTicket() {
    if (this.ticketForm.valid) {
      this.tickets.push(this.ticketForm.value);
      localStorage.setItem('tickets', JSON.stringify(this.tickets));
      this.currentView = 'list';
      this.ticketForm.reset();
      this.fileName = 'Ningún archivo seleccionado';
    }
  }

  goToList() {
    this.currentView = 'list';
  }

  goToTicket() {
    this.currentView = 'ticket';
  }

  openLogoutModal() {
    const modal = new BootstrapModal(document.getElementById('thanksModal')!);
    modal.show();
  }

  registerAnother() {
    const modal = BootstrapModal.getInstance(document.getElementById('thanksModal')!);
    modal?.hide();
    this.currentView = 'ticket';
  }
}