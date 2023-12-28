import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SlideModel } from './models';
import { LabelComponent } from './components/label/label.component';

@Component({
  selector: 'ffp-carousel',
  standalone: true,
  templateUrl: './ffp-carousel.component.html',
  styleUrl: './ffp-carousel.component.scss',
  imports: [CommonModule, LabelComponent]
})
export class FfpCarouselComponent implements OnInit {

  @Input() height: string | undefined;
  @Input() backgroundColor: string = '#f9f9f9';
  @Input() autoPlay = true;

  private _slides: SlideModel[] | undefined;

  get slides(): SlideModel[] | undefined {
    return this._slides;
  }

  @Input() set slides(value: SlideModel[]) {
    this._slides = value;
  }

  public get slideImageHeight(): string {
    return this.height ? 'calc(' + this.height + ' * 0.88)' : 'auto'
  }

  public currentIndex = 0;

  public readonly PREV_IMG_SRC: string = '/assets/images/prev.png';
  public readonly NEXT_IMG_SRC: string = '/assets/images/next.png';

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
    if (this._slides) {
      this.currentIndex = (this.currentIndex + 1) % this._slides.length;
    }
  }

  prev(): void {
    if (this._slides) {
      this.currentIndex = (this.currentIndex - 1 + this._slides.length) % this._slides.length;
    }
  }

  private runAutoPlay(): void {
    setInterval(() => {
      this.next();
    }, 5000);
  }

}
