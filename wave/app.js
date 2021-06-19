import { WaveGroup } from "./wavegroup.js";

class App{
    constructor(){

      this.canvas = document.createElement('canvas');
      document.body.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');

      this.WaveGroup = new WaveGroup();

      // 화면 리사이징
      window.addEventListener('resize', this.resize.bind(this), {
        once: false,
        passive: false,
        capture: false,
    });

      this.resize();

      // 애니메이션 지정
      requestAnimationFrame(this.animate.bind(this));

    }

    resize(){
      
      this.stageWidth = document.body.clientWidth;
      this.stageHeight = document.body.clientHeight;

      // double size
      this.canvas.width = this.stageWidth * 2;
      this.canvas.height = this.stageHeight * 2;
      this.ctx.scale(2,2);

      this.WaveGroup.resize(this.stageWidth, this.stageHeight);

    }

    animate(){
    
      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
      this.WaveGroup.draw(this.ctx);

      requestAnimationFrame(this.animate.bind(this));
    }
    


}





window.onload=()=>{
    new App();
}