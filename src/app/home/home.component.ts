import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  currentSlide = 1;

  nextSlide() {
    if (this.currentSlide < 3) {
      this.currentSlide++;
    }
  }

  prevSlide() {
    if (this.currentSlide > 1) {
      this.currentSlide--;
    }
  }
}
