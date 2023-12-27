import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FfpCarouselComponent } from './ffp-carousel.component';

describe('InfoCarouselComponent', () => {
  let component: FfpCarouselComponent;
  let fixture: ComponentFixture<FfpCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FfpCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FfpCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
