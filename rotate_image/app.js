import { List } from "./list.js";

class App{

    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.pixelRatio = window.devicePixelRatio> 1 ? 2 : 1;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.isDown = false;
        this.moveX = 0;
        this.offsetX = 0;

        document.addEventListener('mousedown', this.onDown.bind(this), false);
        document.addEventListener('mousemove', this.onMove.bind(this), false);
        document.addEventListener('mouseup', this.onUp.bind(this), false);
      //  document.addEventListener('click', this.onClick.bind(this), false);
        

        requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
        this.list = new List(this.stageWidth/2, this.stageHeight/2, 12, this.stageWidth/9, this.stageWidth/3.5);

    }

    animate(){
        this.moveX *= 0.92;
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.list.animate(this.ctx, this.moveX);
        
        requestAnimationFrame(this.animate.bind(this));
       
    }

    onClick(event) {
        var x = event.layerX;
        var y = event.layerY;
        var pixel = this.ctx.getImageData(x, y, 1, 1);
        var data = pixel.data;
        var rgba = 'rgba(' + data[0] + ', ' + data[1] +
          ', ' + data[2] + ', ' + (data[3] / 255) + ')';
        
        if (data[0] + data[1] + data[2] < 480) 
          rgba = "white";
        else 
          rgba = "black";

        this.ctx.save();
        this.ctx.fillStyle(rgba);
        this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
        this.ctx.restore();
        
    }
      

    onDown(e){
  
        this.isDown = true;
        this.moveX = 0;
        this.offsetX = e.clientX;
    }

    onMove(e){
        
        if(this.isDown){

            this.moveX = e.clientX - this.offsetX;
            this.offsetX = e.clientX;
        }
    }
    onUp(e){
        this.isDown = false;
    }



}

window.onload = ()=>{
    new App();
}