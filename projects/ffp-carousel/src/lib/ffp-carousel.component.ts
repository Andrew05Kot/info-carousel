import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SlideModel } from './models';
import { LabelComponent } from "./components/label/label.component";

@Component({
    selector: 'ffp-carousel',
    standalone: true,
    templateUrl: './ffp-carousel.component.html',
    styleUrl: './ffp-carousel.component.scss',
    imports: [CommonModule, LabelComponent]
})
export class FfpCarouselComponent {

  @Input() height: string | undefined;
  @Input() backgroundColor: string = '#f9f9f9';
  @Input() autoPlay = true;

  _slides: SlideModel[] | undefined;
  @Input() set slides(value: SlideModel[]) {
    this._slides = value;
  }

  currentIndex = 0;

  ngOnInit(): void {
    if (this.autoPlay) {
      this.runAutoPlay();
    }
  }

  slideStyles(): { [key: string]: string } {
    return {
      'transform': `translateX(-${this.currentIndex * 100}%)`
    };
  }

  next(): void {
    if(this._slides) {
      this.currentIndex = (this.currentIndex + 1) % this._slides.length;
    }
  }

  prev(): void {
    if(this._slides) {
      this.currentIndex = (this.currentIndex - 1 + this._slides.length) % this._slides.length;
    }
  }

  private runAutoPlay(): void {
    setInterval(() => {
      this.next();
    }, 5000);
  }

}
