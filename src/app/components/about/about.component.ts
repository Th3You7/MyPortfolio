import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  bio =
    'I am a passionate web developer with a strong focus on creating beautiful and functional web applications. With expertise in Angular, TypeScript, and modern web technologies, I strive to deliver exceptional user experiences.';

  skills = {
    languages: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Python'],
    frameworks: ['Angular', 'React', 'Node.js', 'Express.js'],
    tools: ['Git', 'VS Code', 'Docker', 'AWS', 'Firebase'],
  };

  experience = [
    {
      title: 'Web Developer',
      company: 'Company Name',
      period: '2020 - Present',
      description:
        'Developed and maintained web applications using Angular and TypeScript.',
    },
    {
      title: 'Frontend Developer',
      company: 'Previous Company',
      period: '2018 - 2020',
      description:
        'Created responsive web interfaces and implemented modern UI/UX practices.',
    },
  ];
}
