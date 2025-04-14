import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Insure',
      description: 'A simple landing page for a insurance company',
      imageUrl: '../../assets/images/insure.png',
      technologies: ['Html', 'Css'],
      githubUrl: 'https://github.com/Th3You7/insure',
      demoUrl: 'https://th3you7.github.io/insure/',
    },
    {
      id: 2,
      title: 'HolyQuarn',
      description: 'An app for listening to the Holy Quran',
      imageUrl: '../../assets/images/holyquran.png',
      technologies: ['ReactJs', 'Material-UI'],
      githubUrl: 'https://github.com/Th3You7/holyquran',
      demoUrl: 'https://th3you7.github.io/holyquran/#/home',
    },
    {
      id: 3,
      title: 'eManager',
      description: 'A pwa for managing your business',
      imageUrl: '../../assets/images/emanager.png',
      technologies: ['ReactJs', 'Material-UI', 'ExpressJs', 'MongoDB'],
      githubUrl: 'https://github.com/Th3You7/emanager',
      demoUrl: 'https://th3you7.github.io/holyquran/#/home',
    },
    {
      id: 4,
      title: 'ConstructionXpert',
      description: 'A web app for construction companies',
      imageUrl: '../../assets/images/xpert.png',
      technologies: ['Java', 'TailwindCss', 'Hibernate'],
      githubUrl: 'https://github.com/Th3You7/ConstructionXpert',
      demoUrl: 'https://github.com/Th3You7/ConstructionXpert',
    },
    {
      id: 5,
      title: 'SportFlow',
      description: 'A brief description of project 1',
      imageUrl: '../../assets/images/sportflow.png',
      technologies: ['Java', 'TailwindCss', 'Hibernate'],
      githubUrl: 'https://github.com/Th3You7/SportFlow',
      demoUrl: 'https://github.com/Th3You7/SportFlow',
    },

    // Add more projects as needed
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }

  getProjectsByTechnology(technology: string): Project[] {
    return this.projects.filter((project) =>
      project.technologies.includes(technology)
    );
  }
}
