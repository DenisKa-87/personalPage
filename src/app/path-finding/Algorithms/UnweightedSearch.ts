import { Maze } from "../Entities/Maze";
import { Gridnode } from "../Entities/gridNode";
import { IStack } from "../helpers/IStack";
import { Queue } from "../helpers/Queue";
import { Stack } from "../helpers/Stack";

export class UnWeightedSearch {

    maze: Maze
    path: IStack<Gridnode>
    goalIsFound = false;
    alertShown = false;
    constructor(maze: Maze, type: string) {
        this.maze = maze;

        if (type === 'breadthFirst') {
            this.path = new Queue<Gridnode>
        }
        else
            this.path = new Stack<Gridnode>
    }


    search(i: number) {
        if (this.goalIsFound)
            return;
        if (i === 0) {
            if(!this.maze.startIsSet || !this.maze.finishIsSet){
                alert("Please set start and finish!")
                return;
            }
            this.path.push(this.maze.start)
        }
        if (this.path.size() === 0 && !this.goalIsFound) {
            if(!this.alertShown){
                alert("There is no way!")
                this.alertShown = true;
            }
            return;
        }
        

        var currentPlace = this.path.pop();
        currentPlace.visited = true;
        if (currentPlace.isGoal) {
            this.goalIsFound = true
            console.log("We found our goal!")
            this.showPass(currentPlace, 1)
            return;
        }
        this.maze.getNextMove(currentPlace, this.path)


        setInterval(() => {
            this.search(1)
        }, 100);
    }

    showPass(finish: Gridnode, i: number){
        if(finish === this.maze.start){
            return;}

        setInterval(() => finish.showPass = true, 50*i)
        i++;
        this.showPass(finish.from,i)
    }
}
