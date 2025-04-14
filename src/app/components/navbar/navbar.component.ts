import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, NgIf],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor(private router: Router, private themeService: ThemeService) {}

  get currentTheme(): string {
    return this.themeService.getCurrentTheme();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(section: string) {
    this.router.navigate([section]);
    this.isMenuOpen = false;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  downloadCV() {
    // Replace with your actual CV file path
    const cvUrl = '../../assets/cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'elbasiri-yunus-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
