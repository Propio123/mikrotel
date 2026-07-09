import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  fotos = ['assets/foto1.jpeg', 'assets/foto2.jpeg', 'assets/foto3.jpeg'];
  currentIndex = 0;
  private intervalId: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.fotos.length;
      this.scrollToIndex(this.currentIndex);
    }, 7000);
  }

  scrollToIndex(index: number) {
    const container = document.querySelector('.carousel-container');
    const slides = container?.querySelectorAll('.carousel-slide');
    if (slides && slides[index]) {
      slides[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }
}
