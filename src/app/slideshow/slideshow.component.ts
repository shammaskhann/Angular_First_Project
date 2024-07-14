import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  standalone: true,

  imports: [],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.css'
})
export class SlideshowComponent {
  imagePath = 'assets/images/cover.png';
  // If you prefer to keep text in TypeScript
mainTextPart1 = "Manage Your Big Project";
mainTextPart2 = "";
  subText = "With Our Project Management Tool You Can Manage Your Project Easily And Effectively. Our Tool Will Help You To Manage Your Project With Ease.";
}
