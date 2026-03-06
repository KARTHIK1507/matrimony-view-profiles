import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';

declare var bootstrap: any;
@Component({
  selector: 'app-matches',
  standalone: true,
  templateUrl: './matches.component.html',
  imports: [CommonModule],
})
export class MatchesComponent {
  profiles: any[] = [];
  index = 0;

  constructor(
    private profileService: ProfileService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.profiles = this.profileService.getProfiles();

    setTimeout(() => {
      const savedIndex = localStorage.getItem('currentProfileIndex');

      if (savedIndex) {
        const carouselElement = document.getElementById('profileCarousel');

        const carousel = new bootstrap.Carousel(carouselElement);

        carousel.to(parseInt(savedIndex));
      }
    }, 200);
  }

  moveNextProfile() {
    const carouselElement = document.getElementById('profileCarousel');

    const carousel =
      bootstrap.Carousel.getInstance(carouselElement) ||
      new bootstrap.Carousel(carouselElement);

    carousel.next();
  }

  currentProfile() {
    return this.profiles[this.index];
  }

  nextProfile() {
    this.index++;
    if (this.index >= this.profiles.length) {
      this.index = 0;
    }
  }

  interested() {
    alert('Interested');
    this.saveCurrentIndex();
    this.moveNextProfile();
  }

  notInterested() {
    alert('Not Interested');
    this.saveCurrentIndex();
    this.moveNextProfile();
  }

  shortlist() {
    alert('Shortlisted');
    this.saveCurrentIndex();
    this.moveNextProfile();
  }

  saveCurrentIndex() {
    const carouselElement = document.querySelector('.carousel-item.active');

    const index = Array.from(
      document.querySelectorAll('.carousel-item'),
    ).indexOf(carouselElement as Element);

    localStorage.setItem('currentProfileIndex', index.toString());
  }

  viewProfile(i: number) {
    localStorage.setItem('currentProfileIndex', i.toString());
    this.router.navigate(['/profile', i]);
  }
}
