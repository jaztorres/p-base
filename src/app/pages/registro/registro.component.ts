import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './registro.component.html',
  styles: ``
})
export class RegistroComponent implements OnInit {

///nuevo

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











/*
///antes
  isRegisterFormVisible: boolean = true; // Muestra el formulario de registro por defecto



 //////Anterior//// 
  // Declaramos el formulario como un objeto de tipo FormGroup.
registroForm: FormGroup;
  loginForm: any;

  // En el constructor, inyectamos el FormBuilder para crear los controles del formulario.
  constructor(private fb: FormBuilder) {
    // Inicializamos el formulario con sus controles y validaciones.
    this.registroForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(3)]],
      correoElectronico: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      direccionCompleta: ['', Validators.required],
      estado: ['', Validators.required],
      telefonoCelular: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Ejemplo para 10 dígitos.
      aceptoTerminos: [false, Validators.requiredTrue] // Requiere que el checkbox sea true.
    });
  }

  // Método que se ejecuta al enviar el formulario.
  onSubmit(): void {
    
    // Verificamos si el formulario es válido.
    if (this.registroForm.valid) {
      console.log('Formulario enviado:', this.registroForm.value);
      // Aquí puedes agregar la lógica para enviar los datos a un servicio o API.
    } else {
      console.log('El formulario no es válido. Por favor, revisa los campos.');
      // Puedes marcar los campos inválidos para que el usuario los vea.
      this.registroForm.markAllAsTouched();
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




}*/
