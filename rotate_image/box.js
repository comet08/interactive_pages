export class Box{
    constructor(size){
        this.sides = 4;
        this.size = size;
    }


    animate(ctx){
        const angle = Math.PI*2/this.sides;
        for(let i = 0; i < this.sides; i++){
            const x2 = this.size * Math.cos(angle * i);
            const y2 = this.size * Math.sin(angle * i);
            i == 0 ? ctx.moveTo(x2, y2) : ctx.lineTo(x2, y2);
        
        }
    }
}