import { Project } from "./Project";

export class Projects{
    name: string;
    link: Project
    childrenLinks: Project[]
    
    constructor(name: string, link: Project, links?: Project[]){
        this.name = name;
        this.link = link;
        this.childrenLinks = links;
    }
    
}