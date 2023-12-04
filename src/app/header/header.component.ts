import { Component } from '@angular/core';
import { Menu } from '../models/menu';
import { Link } from '../models/link';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent {
  
  softwareProjects = new Menu("Software projects", [new Link("Visualization of pathfinding algorithms", "pathFinding"),
  new Link("Visualization of sorting algorithms", "sorting"),
]);

  baseUrl = environment.baseUrl

  modeling = new Menu("3d modeling", []);
  architecture = new Menu("Architecture", []);

  menus: Menu[] = [this.softwareProjects, this.modeling, this.architecture]
  
  
  check(id: string){
    console.log(id)
    this.menus.forEach(menu => {
      if(menu.name === id)
        menu.show = !menu.show;
      else
        menu.show = false;
    })
  }

}
