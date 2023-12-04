import { Component } from '@angular/core';
import { Maze } from '../Entities/Maze';
import { UnWeightedSearch } from '../Algorithms/UnweightedSearch';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent {
  ngOnInit(): void {
    this.gridWidth = this.gridHeight * 1.5
    this.maze = new Maze(this.gridHeight, this.gridWidth);
    this.search = new UnWeightedSearch(this.maze, this.type)
    this.type = "depthFirst"
    
  }
  
  onChange(value){
    this.type = value
    this.search = new UnWeightedSearch(this.maze, this.type)
    console.log(value)
  }
  


  public gridHeight = 30;
  gridWidth = this.gridHeight * 1.5
  maze: Maze;
  startFinMode = false;
  search: UnWeightedSearch 
  
  public type: string

  setStartAndFinish(){
    this.startFinMode = !this.startFinMode;
    console.log("StartFinMode: " + this.startFinMode)
    }
    
    clearMaze(){
      
      this.ngOnInit();
    }
}
