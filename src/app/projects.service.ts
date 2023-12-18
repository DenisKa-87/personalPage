import { Injectable } from '@angular/core';
import { Projects as ProjectList } from './models/Projects';
import { Project as Project } from './models/Project';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  softwareProjects = new ProjectList("Programming projects", new Project("List of programming projects",
   "programmingProjects"),
    [new Project("Pathfinding algorithms", "pathFinding",
     "Visualizations of some pathfinding algorithms (weighted or unweighted)."),
    new Project("Sorting algorithms", "sorting",
     "Visualizations of some basic sorting algorithms."),
    ]);
    aboutMe = new ProjectList("About me", new Project("About me///", "aboutMe"));
  baseUrl = environment.baseUrl
 // modeling = new ProjectList("3d modeling", new Project("", ""), []);
 // architecture = new ProjectList("Architecture", new Project("", ""), []);
  menus = [this.softwareProjects, this.aboutMe]
}
