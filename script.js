//0------------------------------------------------
const arr = [];
const ARR_NUM = 10;
for (let i = 0; i < ARR_NUM; i++) {
    arr.push(Math.trunc(Math.random() * 30));
}

//1------------------------------------------------
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.push(-3);
console.log(arr);
arr.unshift(0);
console.log(arr);

//2------------------------------------------------
console.log(arr.length);

//3------------------------------------------------
const b = arr.concat();
console.log(b);

//4------------------------------------------------
console.log('парні індекси:');
for (let i = 0; i < arr.length; i++) {
    if(!(i % 2)) console.log(i);
}

//5------------------------------------------------
console.log('парні елементи:');
for (let i of arr) {
    if (!(i % 2)) console.log(i);
}

//6------------------------------------------------
console.log('індекси нульових елементів:');
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) console.log(i);
}

//7------------------------------------------------
console.log('к-сть нульових елементів:');
let amount = 0;
for (let i of arr) {
    if (!i) amount++;
}
console.log(amount);

//8------------------------------------------------
console.log('масив лише з ненульовими числами:');
const isZero = arr.filter(item => item);
console.log(isZero);

//9------------------------------------------------
console.log('масив усіх елементів, подфлених на 100:');
const divided = arr.map (item => item/100);
console.log(divided);

//10------------------------------------------------
console.log('усі елементи, зведені до куба:');
arr.forEach(item => {
    console.log(item**3)
});

//11------------------------------------------------
console.log('індекс елемента з квадратом = 100:');
const index = arr.findIndex(item => item**2 === 100);

if (index >= 0) {
console.log (index);
} else {
    console.log('such element wasn\'t found.');
}

//12------------------------------------------------
console.log('чи всі числа масиву парні?:');
const isEven = arr.every(item => !(item % 2));
console.log(isEven);

//13------------------------------------------------
console.log('чи є в масиві хоча б одне від\'ємне число?:');
const isNegative = arr.some (item => item < 0);
console.log(isNegative);