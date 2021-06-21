import { Wave } from "./wave.js";
import { Point } from "./point.js";

class App{

    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        this.pixelRatio = window.devicePixelRatio;
        this.wave1 = new Wave(10, 'rgba(100, 100, 250, 0.5)', 1);
        this.wave2 = new Wave(10, 'rgba(100, 200, 200, 0.5)', 2);
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
       
       

        requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight=  document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;

        this.ctx.scale(this.pixelRatio, this.pixelRatio);
        this.wave1.resize(this.stageWidth/2, this.stageWidth, this.stageHeight);
        this.wave2.resize(0,this.stageWidth, this.stageHeight);
    }
    animate(){
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.wave1.draw(this.ctx);
        this.wave2.draw(this.ctx);

        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = ()=>{
    new App();
}