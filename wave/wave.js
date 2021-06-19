import Point from "./point.js";

export class Wave{
    // 웨이브 번호, 총 점의 갯수, 색상
    constructor(index, totalPoints, color){
  
        this.index = index;
        this.totalPoints = totalPoints;
        this.color  = color;
        this.points = [];
  
    }
  
    // 윈도우 사이즈 변경
    resize(stageWidth, stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = this.stageWidth/2;
        this.centerY = this.stageHeight/2;

        // 포인트 사이의 거리 / 포인트 갯수로 가로 길이를 나누기
        this.pointGap  = this.stageWidth/(this.totalPoints-1);
        this.init();
    }
  
    init(){
        // 웨이브에 속하는 포인트 초기화
        // 인덱스, x는 gap*i, y축은 사운데로 설정

        for(let i = 0 ; i < this.totalPoints; i++){
            const point = new Point(
                this.index+i,
                this.pointGap *i,
                this.centerY
            );
            this.points[i] = point;
        }
    }
  
    draw(ctx){
        // 그리기.
        ctx.beginPath();
        ctx.fillStyle= this.color;
        
        let prevX = this.points[0].x;
        let prevY = this.points[0].y;
  
        ctx.moveTo(prevX, prevY);
  
        for(let i = 0 ; i < this.totalPoints; i++){
            //맨 처음과 맨 끝점이 아니면 포인트 위치를 업데이트.
            if(i>0 && i < this.totalPoints-1)
                this.points[i].update();
            
            //업데이트 후 이전 위치와 이후 위치의 중간 값을 산출
            const cx = (prevX + this.points[i].x) / 2;
            const cy = (prevY + this.points[i].y) / 2;
            
            // 곡선으로 이어주기
            ctx.quadraticCurveTo(prevX, prevY, cx,cy);
            prevX = this.points[i].x;
            prevY = this.points[i].y;
        }
        ctx.lineTo(prevX, prevY);

        //물결 아래 채우기
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.fill();
        ctx.closePath();
    }
  }