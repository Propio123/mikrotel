import { Component } from '@angular/core';
import { Hero } from "../hero/hero";
import { Planes } from "../planes/planes";
import { HomeInfo } from "../home-info/home-info";

@Component({
  selector: 'app-home',
  imports: [Hero, Planes, HomeInfo],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
}
