export class Gridnode{
    isWall = false;
    isStart = false;
    isGoal = false;
    showPass = false;
    //addedToPath = false;
    X: number;
    Y: number;
    visited = false;
    from: Gridnode = null

}