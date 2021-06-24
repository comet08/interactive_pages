export class Box{
    constructor(size){
        this.sides = 4;
        this.size = size;
        this.fixedSize = size;

       // document.addEventListener('mouseover', this.onOver.bind(this), false);
       // document.addEventListener('mouseout', this.onOut.bind(this), false);
      
    }

    onOver(e){
        this.size *= 0.1;
    }

    onOut(e){
        this.size = this.fixedSize;
    }


    animate(ctx){
        const angle = Math.PI*2/this.sides;
        /*
        for(let i = 0; i < this.sides; i++){
            const x2 = this.size * Math.cos(angle * i);
            const y2 = this.size * Math.sin(angle * i);
            i == 0 ? ctx.moveTo(x2, y2) : ctx.lineTo(x2, y2);
        
        }
        */
        const image = document.getElementById('img');
        ctx.drawImage(image, 0, 0, this.size, this.size);
       
    }
}