let canvas = document.getElementById("canvas");
let isDrawing = false;// обозначение идет рисование или нет
const pi = Math.PI

const ctx = canvas.getContext("2d");//рисование происходит на плоскости 

let penColor = "red";
const setPenColor = (color) => {
  penColor = color;//служит для того чтобы менять цвет ручки
};

canvas.onmousedown = (e) => {//нажатие левой кнопкой мыши
  isDrawing = true;//обозначение что рисование идет 
  ctx.strokeStyle = penColor;//цвет линии становится такой же как цвет ручки 
  ctx.lineWidth = 5;//толщина линии 
  ctx.beginPath();//метод вызывания линии
  ctx.lineTo(e.clientX, e.clientY)
  ctx.moveTo(e.layerX, e.layerY);//в контекст передаются координаты движения мыши. е событие event то есть то над которым совершается действие
};

canvas.onmousemove = (e) => { //отрабатывает на движение мыши 
  if (isDrawing) {
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  }
};

canvas.onmouseup = (e) => {
  isDrawing = false;//
};

// resize the canvas to fill browser window dynamically
window.addEventListener("resize", resizeCanvas, false);
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();