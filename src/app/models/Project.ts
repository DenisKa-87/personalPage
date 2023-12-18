export class Project{
    name: string;
    link: string;
    description: string = "";
    constructor(name: string, link: string, description?: string){
        this.name = name;
        this.link = link;
        this.description  = description;
    }
}