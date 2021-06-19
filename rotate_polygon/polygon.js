const PI2 = Math.PI*2;
const colors = ['rgb(245, 218, 255)', 'rgb(236, 182, 255)', 'rgb(225, 142, 255)', 'rgb(218, 115, 255)', 'rgb(211, 89, 255)',
'rgb(202, 58, 255)', 'rgb(187, 0, 255)', 'rgb(165, 0, 224)', 'rgb(142, 0, 194)', 'rgb(115, 0, 156)', 'rgb(87, 0, 119)', 'rgb(57, 0, 78)'];

export class Polygon{
    constructor(x, y, radius, sides, size){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sides = sides;
        this.rotate = 0;
        this.size = size;
    }

    animate(ctx, moveX){
        ctx.save();
        
        //ctx.beginPath();

        const angle = PI2 / this.sides;
        const angle2 = PI2 / 4;

        ctx.translate(this.x, this.y);

        this.rotate += moveX * 0.008;
        ctx.rotate(this.rotate);

        for(let i = 0 ; i < this.sides; i++){

            ctx.fillStyle = colors[i];

            const x = this.radius * Math.cos(angle * i);
            const y = this.radius * Math.sin(angle * i);

           // (i == 0 )? ctx.moveTo(x,y) : ctx.lineTo(x,y);

           ctx.save();
           ctx.translate(x,y);
           ctx.rotate(((360 / this.sides)*i + 45)*Math.PI / 180);
           ctx.beginPath();
           for(let j = 0; j < 4; j++){
                const x2 = this.size * Math.cos(angle2 * j);
                const y2 = this.size * Math.sin(angle2*j);
                (j  == 0 )? ctx.moveTo(x2,y2) : ctx.lineTo(x2,y2);

           }
           ctx.fill();
           ctx.closePath();
           ctx.restore();

        }
        //ctx.fill();
      //  ctx.closePath();
        ctx.restore();
    }
}