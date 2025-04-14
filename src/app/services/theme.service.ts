import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'theme';
  private readonly DARK_THEME = 'dark';
  private readonly LIGHT_THEME = 'light';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.initializeTheme();
    }
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme(this.isSystemDark() ? this.DARK_THEME : this.LIGHT_THEME);
    }
  }

  private isSystemDark(): boolean {
    return (
      this.isBrowser &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  }

  getCurrentTheme(): string {
    if (!this.isBrowser) {
      return this.LIGHT_THEME; // Default to light theme for SSR
    }
    return document.documentElement.classList.contains(this.DARK_THEME)
      ? this.DARK_THEME
      : this.LIGHT_THEME;
  }

  toggleTheme(): void {
    if (!this.isBrowser) return;

    const currentTheme = this.getCurrentTheme();
    const newTheme =
      currentTheme === this.DARK_THEME ? this.LIGHT_THEME : this.DARK_THEME;
    this.setTheme(newTheme);
  }

  private setTheme(theme: string): void {
    if (!this.isBrowser) return;

    if (theme === this.DARK_THEME) {
      document.documentElement.classList.add(this.DARK_THEME);
      document.documentElement.classList.remove(this.LIGHT_THEME);
      document.body.classList.add(this.DARK_THEME);
      document.body.classList.remove(this.LIGHT_THEME);
    } else {
      document.documentElement.classList.add(this.LIGHT_THEME);
      document.documentElement.classList.remove(this.DARK_THEME);
      document.body.classList.add(this.LIGHT_THEME);
      document.body.classList.remove(this.DARK_THEME);
    }
    localStorage.setItem(this.THEME_KEY, theme);
  }
}
