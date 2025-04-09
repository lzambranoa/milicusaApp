import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PreNavbarComponent } from "./components/shared/pre-navbar/pre-navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, PreNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'milicusaPasteleria';
}
