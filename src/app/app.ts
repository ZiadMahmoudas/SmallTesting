import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./components/hero-component/hero-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'CRUD';
}
