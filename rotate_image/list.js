import { Box } from "./box.js";

const colors = ['rgb(245, 218, 255)', 'rgb(236, 182, 255)', 'rgb(225, 142, 255)', 'rgb(218, 115, 255)', 'rgb(211, 89, 255)',
'rgb(202, 58, 255)', 'rgb(187, 0, 255)', 'rgb(165, 0, 224)', 'rgb(142, 0, 194)', 'rgb(115, 0, 156)', 'rgb(87, 0, 119)', 'rgb(57, 0, 78)'];


export class List{
    constructor(x, y, totalBox, size, radius){
        this.totalBox = totalBox;
        this.boxes = [];

        this.fixedS = size;
        this.size = size;

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.rotate = 0;

        this.init();
    }

    init(){ 
        for(let i = 0 ; i < this.totalBox; i++){
            const box = new Box(this.size);
            
            this.boxes[i] = box;
           
        }
    }



    animate(ctx, moveX){ 
        ctx.save();
        const angle = Math.PI*2/this.totalBox;
        
        ctx.translate(this.x, this.y);

        this.rotate += moveX * 0.08;

        ctx.rotate(this.rotate);

        ctx.shadowBlur = 20;
        ctx.shadowColor = "rgba(200,200,100,0.5)";
        
        for(let i = 0; i < this.totalBox; i++){
            ctx.save();
          
            const x = this.radius * Math.cos(angle * i);
            const y = this.radius * Math.sin(angle * i);
            ctx.translate(x, y);
            ctx.fillStyle = colors[i];
    
            const rotate = ((360 / this.totalBox)*i + 100)*Math.PI / 180;
            
            ctx.rotate(rotate);
            ctx.beginPath();
            this.boxes[i].animate(ctx);
            ctx.fill();
            ctx.closePath();
            ctx.restore();
        }
        
        ctx.restore();
    }
}