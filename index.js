const canvas = document.getElementById('c1');
const ctx = canvas.getContext('2d');
const range = document.querySelector('.slider');
const lines = document.querySelector('.but1')
const circles = document.querySelector('.but2')
const breakingLines = document.querySelector('.but3')
const clearCanvas = document.querySelector('.but4')
let state = 1
let d = 50;
let pX = [];
let pY = [];

class Circle {
  constructor(x0, x1, y0, y1, d) {
    this.x0 = x0;
    this.x1 = x1;
    this.y0 = y0;
    this.y1 = y1;
    this.d = d;
    this.h = this.x1 - this.x0;
    this.t = this.y1 - this.y0;
    this.a = Math.pow(this.h, 2)
    this.b = Math.pow(this.t, 2)
    this.R1 = Math.sqrt(this.a + this.b)
    this.R2 = this.R1 - d / 2
    this.R3 = this.R1 + d / 2
  }

  drawCircle() {
    ctx.beginPath();
    ctx.arc(this.x0, this.y0, this.R1, 0, Math.PI*2, true);
   	ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.x0, this.y0, this.R2, 0, Math.PI*2, true);
   	ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.x0, this.y0, this.R3, 0, Math.PI*2, true);
   	ctx.stroke();
  }
}

class LineSegment {                                              //линия
  constructor(x0, x1, y0, y1, d) {
    this.x0 = x0;
    this.x1 = x1;
    this.y0 = y0;
    this.y1 = y1;
    this.d = d;
    this.nX = (this.y0 - this.y1) / Math.sqrt((this.y0 - this.y1) * (this.y0 - this.y1) + (this.x1 - this.x0) * (this.x1 - this.x0))
    this.nY = (this.x1 - this.x0) / Math.sqrt((this.y0 - this.y1) * (this.y0 - this.y1) + (this.x1 - this.x0) * (this.x1 - this.x0))
    this.x3 = this.x0 + this.nX * this.d
    this.y3 = this.y0 + this.nY * this.d
    this.x4 = this.x1 + this.nX * this.d
    this.y4 = this.y1 + this.nY * this.d
    this.x5 = this.x0 + this.nX * (-this.d)
    this.y5 = this.y0 + this.nY * (-this.d)
    this.x6 = this.x1 + this.nX * (-this.d)
    this.y6 = this.y1 + this.nY * (-this.d)
  }

  drawLineSegment() {
    ctx.beginPath()
    ctx.moveTo(this.x0, this.y0);   	
    ctx.lineTo(this.x1, this.y1);
    ctx.stroke();
  
    ctx.beginPath()
    ctx.moveTo(Math.floor(this.x3), Math.floor(this.y3));   	
    ctx.lineTo(Math.floor(this.x4), Math.floor(this.y4));
    ctx.stroke();
  
    ctx.beginPath()
    ctx.moveTo(Math.floor(this.x5), Math.floor(this.y5));   	
    ctx.lineTo(Math.floor(this.x6), Math.floor(this.y6));
    ctx.stroke();
  }
}

class BreakingLines {                                                     //ломаная
  constructor(x0, x1, y0, y1) {
    this.x0 = x0;
    this.x1 = x1;
    this.y0 = y0;
    this.y1 = y1;
  }

  drawBreakingLines() {
    ctx.beginPath()
    ctx.moveTo(this.x0, this.y0);   	
    ctx.lineTo(this.x1, this.y1);
    ctx.stroke();
  }
}	

function toNull() {                             //зануление массивов с координатами
	pX = [];
  pY = [];
}

function shiftCoords() {                        //запись координат в массив
  pX.shift();
  pY.shift();
}

range.addEventListener('input', function () {
  d = range.value;
  console.log(d)
}, false);

canvas.addEventListener ("click", function (event) {
  if(state == 4) {
    state = 1
  }
	pX.push( event.offsetX );
	pY.push( event.offsetY );
  switch(state) {
    case 1:
      if(pX.length == 2 && pY.length == 2) {
        new LineSegment(pX[0], pX[1], pY[0], pY[1], d).drawLineSegment()
        toNull()
      }
      break;
    case 2:
      if(pX.length == 2 && pY.length == 2) {
        new Circle(pX[0], pX[1], pY[0], pY[1], d).drawCircle()
        toNull()
      }
      break;
    case 3:
      if(pX.length == 2 && pY.length == 2) {
        new BreakingLines(pX[0], pX[1], pY[0], pY[1]).drawBreakingLines()
        shiftCoords()
      }
      break;
    default:
      break;
  }
})

lines.addEventListener('click', function() {
  state = 1
  toNull()
})

circles.addEventListener('click', function() {
  state = 2
  toNull()
})

breakingLines.addEventListener('click', function() {
  state = 3
  toNull()
})

clearCanvas.addEventListener('click', function() {
  state = 4;
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
})