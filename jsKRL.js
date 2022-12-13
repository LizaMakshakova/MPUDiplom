var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var range = document.querySelector('.slider');
var d=50;
var pX = [];
var pY = [];
var radius = document.getElementById('myRange').value;

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
		DrawLine()
	}
	if (state==2){
		DrawCircle()
	}
	if (state==3){
		DrawLineOne()
	}
}

function SetLine() {
	state=1;
}
function SetCircle() {
	state=2;
}
function SetLineOne() {
	state=3;
}

function DrawLine(){
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

		pX = [];
        pY = [];
	}
}	

function DrawCircle(){
	//рисуем круг	
	if ( pX.length == 2 ){
   		h = pX[1] - pX[0];
   		t = pY[1] - pY[0];
   		a = Math.pow(h, 2);
   		b = Math.pow(t, 2);
   		R1 = Math.sqrt(a + b);

   		ctx.beginPath();
    	ctx.arc(pX[0], pY[0], R1,0,Math.PI*2, true);
   	 	ctx.stroke();

   	 	R2 = R1-d/2;
   		ctx.beginPath();
    	ctx.arc(pX[0], pY[0], R2,0,Math.PI*2, true);
   	 	ctx.stroke();
   	 
   	 	R3 = R1+d/2;
   		ctx.beginPath();
    	ctx.arc(pX[0], pY[0], R3,0,Math.PI*2, true);
   	 	ctx.stroke();
   	 	
   	 	pX = [];
    	pY = [];
	}					
}

function DrawLineOne() {
	if ( pX.length == 2 ){
		
		ctx.beginPath()
		ctx.moveTo(pX[0], pY[0]);   	
		ctx.lineTo(pX[1], pY[1]);
		ctx.stroke();

		pX = [];
    	pY = [];

	}		
}

let button = document.querySelector('.but4');
button.onclick =  function RasA(){
ctx.clearRect(0,0,600,500);
}			