
export default class Point{
    constructor(index, x, y){
        
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.05;

        this.cur = index;
        this.max = Math.random() * 100 + 150;
    }

    // 위치 조정
    update(){
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
    }
}