import { Component } from '@angular/core';
import { Hero } from "../hero/hero";
import { Planes } from "../planes/planes";

@Component({
  selector: 'app-home',
  imports: [Hero, Planes],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
