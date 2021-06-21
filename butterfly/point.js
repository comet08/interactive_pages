export class Point{
    constructor(x, y, index, height){
        this.x = x;
        this.y = y;
        this.cur = index;
        this.fiexdY = y;
        this.speed = 0.04;
        this.maximum = Math.random()*100 + height/4;
    }

    update(){
        this.cur += this.speed;
        this.y = this.fiexdY + Math.sin(this.cur)*this.maximum;

    }
}