import { Component, HostListener, OnInit } from '@angular/core';
import { Projects } from '../models/Projects';
import { Project } from '../models/Project';
import { environment } from 'src/environments/environment.development';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class HeaderComponent {
    constructor(links: ProjectsService){
      this.menus = links.menus
      this.baseUrl = links.baseUrl;
    }
  


  menus: Projects[] = []
  baseUrl;

  //isCollapsed = false;
  
  
  // check(id: string){
  //   console.log(id)
  //   this.menus.forEach(menu => {
  //     if(menu.name === id)
  //       menu.show = !menu.show;
  //     else
  //       menu.show = false;
  //   })
  //}

}
