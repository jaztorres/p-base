import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
