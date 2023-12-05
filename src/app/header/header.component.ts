import { Component } from '@angular/core';
import { Menu } from '../models/menu';
import { Link } from '../models/link';
import { environment } from 'src/environments/environment.development';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class HeaderComponent {
  
  softwareProjects = new Menu("Software projects", [new Link("Visualization of pathfinding algorithms", "pathFinding"),
  new Link("Visualization of sorting algorithms", "sorting"),
]);

  baseUrl = environment.baseUrl
  isCollapsed = true;
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
