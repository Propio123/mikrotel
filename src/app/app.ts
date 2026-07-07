import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBar } from "./layout/top-bar/top-bar";
import { Navbar } from "./layout/navbar/navbar";
import { Footer } from "./layout/footer/footer";
import { SocialSidebar } from "./components/social-sidebar/social-sidebar";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBar, Navbar, Footer, SocialSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mikrotel');
}
