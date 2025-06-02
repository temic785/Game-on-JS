export class Position {
    constructor(x=null,y=null) {
        this.x = x;
        this.y = y;
    }
    equals(otherPosition) {
        return otherPosition instanceof Position &&
            this.x === otherPosition.x &&
            this.y === otherPosition.y;
    }
}