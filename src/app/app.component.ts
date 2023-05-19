import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  currentIndex: number = 0;
  data = [
    { name: 'Rice', value: 500, unit: 'kg' },
    { name: 'Coal', value: 600, unit: 'tonne' },
    { name: 'Air', value: 700, unit: 'm³/hr' },
    { name: 'Water', value: 700, unit: 'ml' },
  ];
  val = this.data[this.currentIndex];
  active = this.currentIndex;
  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
    this.val = this.data[slideIndex];
    this.active = slideIndex;
  }
}
