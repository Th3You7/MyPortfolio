import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService, Project } from '../../services/project.service';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedTechnology: string = 'all';
  technologies: string[] = ['all'];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.filteredProjects = this.projects;

    // Get unique technologies
    this.projects.forEach((project) => {
      project.technologies.forEach((tech) => {
        if (!this.technologies.includes(tech)) {
          this.technologies.push(tech);
        }
      });
    });
  }

  filterProjects(technology: string) {
    this.selectedTechnology = technology;
    if (technology === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects =
        this.projectService.getProjectsByTechnology(technology);
    }
  }
}
