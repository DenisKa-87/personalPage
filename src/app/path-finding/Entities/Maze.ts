import { EventEmitter } from "@angular/core";
import { Gridnode } from "./gridNode";
import { IStack } from "../helpers/IStack";

export class Maze {
  gridHeight = 50;
  gridWidth = this.gridHeight * 1.5
  field: Gridnode[][]
  startIsSet = false;
  finishIsSet = false;
  start: Gridnode;
  finish: Gridnode;

  constructor(gridHeight: number, gridWidth: number) {
    this.field = []
    this.gridHeight = gridHeight;
    this.gridWidth = gridWidth;
    for (let i = 0; i < this.gridHeight; i++) {
      var row: Gridnode[] = [];
      for (let j = 0; j < this.gridWidth; j++) {
        let node = new Gridnode();
        node.X = j;
        node.Y = i;
        row.push(node)
      }
      this.field.push(row)
    }
  }



  generateRandomField() {

    this.field.forEach(row => {
      row.forEach(node => {
        var rnd = Math.round(Math.random() * 10)
        if (rnd > 1 || node.isGoal || node.isStart)
          node.isWall = false;
        else
          node.isWall = true;

      })
    });
  }

  setStartAndFinish(node: Gridnode) {

    if (!this.startIsSet) {
      node.isStart = true;
      this.startIsSet = true;
      this.start = node;
    }

    else if (!this.finishIsSet) {
      node.isGoal = true;
      this.finishIsSet = true;
      this.finish = node;
    }
    else {
      this.startIsSet = false;
      this.finishIsSet = false;
      this.start.isStart = false;
      this.finish.isGoal = false;
      //this.field[this.start.Y][this.start.X].isStart = false
      //this.field[this.finish.Y][this.finish.X].isGoal = false
    }
  }

  toggleWall(node: Gridnode) {
    this.field[node.Y][node.X].isWall = !this.field[node.Y][node.X].isWall
  }

  getNextMove(currentPlace: Gridnode,
    path: IStack<Gridnode>) {
    for (var i = -1; i < 2; i++) {
      if(currentPlace.Y + i < 0 || currentPlace.Y + i > this.field.length-1)
        continue;
      for (var j = -1; j < 2; j++) {
        if (Math.abs(j) === Math.abs(i))
          continue;
        if(currentPlace.X + j < 0 || currentPlace.X + j > this.field[0].length-1)
          continue;
        var nextPoint = this.field[currentPlace.Y + i][currentPlace.X + j]
        if (!nextPoint.isWall && !nextPoint.showPass && nextPoint.from === null && nextPoint !== this.start) {
          nextPoint.from = currentPlace;
          path.push(nextPoint);
        }
      }
    }
  }
}
