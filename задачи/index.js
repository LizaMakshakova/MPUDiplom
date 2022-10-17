// №1
const a = +prompt('Введите первое число');
const b = +prompt('Введите второе число');

const summ = a+b;
const raz = a-b;
const proiz = a*b;

alert (summ);
alert (raz);
alert (proiz);
//№2
const x = +prompt('Введите первое число');
const y = +prompt('Введите второе число');

const razn = Math.abs(x)-Math.abs(y);
const sum = 1+Math.abs(x*y);
const del = razn/sum;

alert (del);
//№3
const c = +prompt('Введите длину стороны куба');

const v = Math.pow(c,3);
const s = Math.pow(c,2)*6;

console.log(`Объем: ${v} Площадь: ${s}`);

//№4
const z = +prompt('Введите первое положительное число');
const e = +prompt('Введите второе положительное число');

if (z>0 && e>0) {
	const n =(z+e)/2;
	const k =Math.sqrt(z*e);
	console.log(`Среднее арифметическое: ${n} Среднее геометрическое:${k}`);
} else {
	alert ('Одно или оба числа отрицательны');
}

//№16

const l=6;

const r =l/(2*Math.PI);
const sk = Math.PI*Math.pow(r,2);
console.log(`Площадь круга: ${sk}`);
