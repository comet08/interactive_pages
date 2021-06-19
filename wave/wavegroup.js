import { Wave } from "./wave.js";

export class WaveGroup{
    constructor(){
        //웨이브 그룹 설정
        this.totalWaves = 3;
        this.totalPoints = 6;

        // 웨이브 색상 설정
        this.color = ['rgba(80,200,200,0.4)', 'rgba(50,146,199,0.4)', 'rgba(80,87,200,0.4)'];

        this.waves = [];

        // 초기화
        for(let i = 0 ; i < this.totalWaves; i++){
            const wave = new Wave(i, this.totalPoints, this.color[i]);
            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight){
        for(let i = 0  ; i < this.totalWaves; i++){
            let wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx){      
        for(let i = 0 ; i < this.totalWaves; i++){
            const wave =  this.waves[i];
            wave.draw(ctx);

        }
    }
}