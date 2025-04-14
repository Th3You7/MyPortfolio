import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  name = 'El Basiri Yunus';
  role = 'Web Developer';
  bio =
    'A passionate web developer specializing in Angular and modern web technologies.';
  socialLinks = {
    github: 'https://github.com/th3you7',
    linkedin: 'https://www.linkedin.com/in/youness-el-basiri-817032222/',
  };
}
