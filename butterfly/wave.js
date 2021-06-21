import { Point } from "./point.js";

export class Wave{
    constructor(totalPoints, color, lr){

        this.totalPoints = totalPoints;
        this.color = color;
        this.points = [];
        this.lr = lr;

    }

    resize(x, stageWidth, stageHeight){
        this.stageWidth  = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = this.stageWidth/2;
        this.centerY = this.stageHeight/2;
        this.x = x;  
        this.pointGap = this.centerX/(this.totalPoints-1);
        this.init();
    }

    init(){
        for(let i = 0 ; i < this.totalPoints; i++){
            let level = i+1;
           if(this.lr == 2)
                level = this.totalPoints-i;
            const point = new Point(this.x + this.pointGap*i, this.centerY, level, this.stageHeight);
            this.points[i] = point;
            
        }
    }

    draw(ctx){
        ctx.beginPath();

        ctx.fillStyle = this.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = "rgba(200,200,100,0.5)";

        let index=0, gap=1;

       
        if(this.lr == 2){
            index = this.totalPoints-1;
            gap = -1;
        }
        ctx.moveTo(this.points[index].x, this.points[index].y);
        index = index+gap;
        let prevX = this.points[index].x;
        let prevY = this.points[index].y;
       
        for(let i = index; ;i=i+gap){
            
            if(this.lr == 1 && i == this.totalPoints) break;
            else if(this.lr == 2 && i==-1) break;

            if(i>0 && i < this.totalPoints-1)
                this.points[i].update();
        

            const cy = (prevY + this.points[i].y) / 2;
            const cx = (prevX + this.points[i].x)/2;
         
            ctx.quadraticCurveTo(prevX, prevY, prevX,cy);
            prevX = this.points[i].x;
            prevY = this.points[i].y;

            ctx.fill();
           
        }
      
        ctx.fill();
        ctx.closePath();
       
    }
}