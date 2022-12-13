var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var range = document.querySelector('.slider');
var d=50;
var pX = [];
var pY = [];

range.addEventListener('input', function () {
    d=range.value;
}, false);

canvas.addEventListener ("click", function (event) {
	pX.push( event.offsetX );
	pY.push( event.offsetY );
	Draw();
})

function Draw(){
	if (state==1){
		DrawLineSegment() 
	}
	if (state==2){
		DrawCircle()
	}
	if (state==3){
		DrawLineSegmentSet()
	}   
}

function SetLineSegment() { 
	state=1;
}
function SetCircle() {
	state=2;
}
function SetLineSegmentSet() { 
	state=3;
}

function ToNull() { 
	pX = [];
    pY = [];
}

function DrawLineSegment(){
	if ( pX.length == 2 ){		
		nX=pY[0]-pY[1];
		nY=pX[1]-pX[0];
		l = Math.sqrt(nX*nX+nY*nY);
		nX = nX / l;
		nY = nY / l;
		x3 = pX[0] + nX *d;
		y3 = pY[0] + nY *d;
		x4 = pX[1] + nX *d;
		y4 = pY[1] + nY *d;
		x5 = pX[0] + nX *(-d);
		y5 = pY[0] + nY *(-d); 
		x6 = pX[1] + nX *(-d);
		y6 = pY[1] + nY *(-d);

		_DrawLineSegment() 
	}
}	

function DrawCircle(){	
	if ( pX.length == 2 ){
   		h = pX[1] - pX[0];
   		t = pY[1] - pY[0];
   		a = Math.pow(h, 2);
   		b = Math.pow(t, 2);
   		R1 = Math.sqrt(a + b);
		R2 = R1-d/2;
		R3 = R1+d/2;

   		_DrawCircle(); // _DrawCircle
	}					
}

function DrawLineSegmentSet(){
	if ( pX.length == 2 ){		
		nX=pY[0]-pY[1];
		nY=pX[1]-pX[0];
		l = Math.sqrt(nX*nX+nY*nY);
		nX = nX / l;
		nY = nY / l;
		x3 = pX[0] + nX *d;
		y3 = pY[0] + nY *d;
		x4 = pX[1] + nX *d;
		y4 = pY[1] + nY *d;
		x5 = pX[0] + nX *(-d);
		y5 = pY[0] + nY *(-d); 
		x6 = pX[1] + nX *(-d);
		y6 = pY[1] + nY *(-d);

		_DrawLineSegmentSet() // Rename!!!
	}
}	

function _DrawLineSegment() {
	ctx.beginPath()
	ctx.moveTo(pX[0], pY[0]);   	
	ctx.lineTo(pX[1], pY[1]);
	ctx.stroke();

	ctx.beginPath()
	ctx.moveTo(Math.floor(x3), Math.floor(y3));   	
	ctx.lineTo(Math.floor(x4), Math.floor(y4));
	ctx.stroke();

	ctx.beginPath()
	ctx.moveTo(Math.floor(x5), Math.floor(y5));   	
	ctx.lineTo(Math.floor(x6), Math.floor(y6));
	ctx.stroke();

	ToNull();
}

function _DrawCircle() {
	ctx.beginPath();
    ctx.arc(pX[0], pY[0], R1,0,Math.PI*2, true);
   	ctx.stroke();

   	ctx.beginPath();
    ctx.arc(pX[0], pY[0], R2,0,Math.PI*2, true);
   	ctx.stroke(); 
	
   	ctx.beginPath();
    ctx.arc(pX[0], pY[0], R3,0,Math.PI*2, true);
   	ctx.stroke();
   	 	
   	ToNull();
}

function _DrawLineSegmentSet() {
	ctx.beginPath()
	ctx.moveTo(pX[0], pY[0]);   	
	ctx.lineTo(pX[1], pY[1]);
	ctx.stroke();

	// ctx.beginPath()
	// ctx.moveTo(Math.floor(x3), Math.floor(y3));   	
	// ctx.lineTo(Math.floor(x4), Math.floor(y4));
	// ctx.stroke();

	// ctx.beginPath()
	// ctx.moveTo(Math.floor(x5), Math.floor(y5));   	
	// ctx.lineTo(Math.floor(x6), Math.floor(y6));
	// ctx.stroke();

	pX.shift() 
	pY.shift()    ; // Убрать из массива тоьлко первую точку
}

let button = document.querySelector('.but4');
button.onclick =  function RasA(){ // Переименовать
ctx.clearRect(0,0,600,500);
}			