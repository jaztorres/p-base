import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';


import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-cuenta',
  standalone: true,
  imports: [HeaderComponent,CommonModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './cuenta.component.html',
  styles: ``
})
export class CuentaComponent implements OnInit  {


  registrationForm!: FormGroup;
  loginForm!: FormGroup;
  isRegisterFormVisible: boolean = true; // Muestra el formulario de registro por defecto

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicialización del formulario de registro
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required],
      state: ['', Validators.required],
      phone: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });

    // Inicialización del formulario de login
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Lógica para mostrar un formulario u otro
  showForm(formType: string) {
    this.isRegisterFormVisible = formType === 'register';
  }

  // Manejo del envío del formulario de registro
  onRegister() {
    if (this.registrationForm.valid) {
      console.log('Formulario de registro enviado:', this.registrationForm.value);
      // Aquí iría la lógica para enviar los datos a un servicio o API
      // Después del envío exitoso, podríamos cambiar al formulario de login
      this.showForm('login');
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
    } else {
      console.log('El formulario de registro no es válido.');
      // Lógica para marcar todos los campos como "touched" y mostrar errores
      this.registrationForm.markAllAsTouched();
    }
  }

  // Manejo del envío del formulario de login
  onLogin() {
    if (this.loginForm.valid) {
      console.log('Formulario de login enviado:', this.loginForm.value);
      // Aquí iría la lógica de autenticación
      alert('Inicio de sesión exitoso.');
    } else {
      console.log('El formulario de login no es válido.');
      this.loginForm.markAllAsTouched();
    }
  }
}





 /* @Input() backgroundImage: string = 'assets/background.jpg'; // Default background image
  model = {
    fullName: '',
    email: '',
    password: '',
    address: '',
    state: '',
    phone: '',
    acceptedTerms: false
  };

  onSubmit() {
    console.log('Form submitted:', this.model);
    // Add form submission logic here
  }
}*/


