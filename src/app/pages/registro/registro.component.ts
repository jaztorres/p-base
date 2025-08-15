import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styles: ``
})
export class RegistroComponent {
  // Declaramos el formulario como un objeto de tipo FormGroup.
  registroForm: FormGroup;

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
}



