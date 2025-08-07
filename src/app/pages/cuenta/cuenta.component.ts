import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cuenta',
  standalone: true,
  imports: [HeaderComponent,CommonModule, FormsModule],
  templateUrl: './cuenta.component.html',
  styles: ``
})
export class CuentaComponent {

@Input() isLogin: boolean = false;
  model = {
    fullName: '',
    email: '',
    password: '',
    address: '',
    state: '',
    phone: '',
    acceptTerms: false
  };
}
