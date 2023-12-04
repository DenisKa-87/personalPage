import { Link } from "./link";

export class Menu{
    name: string;
    show: boolean;
    constructor(name: string, links: Link[]){
        this.name = name;
        this.links = links
    }
    links: Link[]
}