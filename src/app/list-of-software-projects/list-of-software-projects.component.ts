import { Component } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../models/Project';

@Component({
  selector: 'app-list-of-software-projects',
  templateUrl: './list-of-software-projects.component.html',
  styleUrls: ['./list-of-software-projects.component.css']
})
export class ListOfSoftwareProjectsComponent {

  constructor(links: ProjectsService){
    this.projects = links.softwareProjects.childrenLinks
  }
  projects: Project[]
}
