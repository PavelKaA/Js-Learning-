// hello world!
"use strict";

console.log("Я учу JavaScript")
function showName(){
    console.log('Vasya');
}
setTimeout(showName,0);
console.log('Kolya');

if(2>1){
    function showmessage(){
        console.log("Message");
    }showmessage();
}
let text= ""
console.log(text.includes('лан',4));

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;

        }
    }
}
multiplyNumeric(menu);

alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );
let num1 = +prompt('Введите ппервое число'),
    num2 = +prompt('Введите второе чило');
alert(`Сумма равна: ${num1 + num2}`);
function readNumber() {
    let num;

    do {
        num = prompt("Введите число", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}

alert(`Число: ${readNumber()}`);


// Nmber 5

let arr =[-1,2,-3,4,-5,-6,7,8,9,10];
let newArr = arr.reduce((sum, current)=> sum + current,0);
console.log(newArr);


// Nmber 3/

let arr =[-1,2,-3,4,-5,-6,7,8,9,10];
let newArr = arr.reduce((sum, current)=> sum + current,0);
console.log(newArr);

let lengthOfArray = arr.length;
console.log(lengthOfArray);

let average = newArr / lengthOfArray;
console.log("Average: " + average);
for (let number of arr) {
    if (number < average) {
        console.log(number );
    }
}
//
// Number 3.2

let arr =[-1,2,-3,4,-5,-6,7,8,9,10];
function averageNumber(arr){
    return arr.reduce((sum,current) => sum + current,0) / arr.length;
}
for (let number of arr) {
    if (number > averageNumber(arr))continue;
    console.log(number);
}
// Number1

let arr =[-1,2,-3,4,-5,-6,7,8,9,10];
for (let number of arr) {
    // console.log(number);
}
let newArr = arr.filter( number => number % 2 ==0 && number > 0);
let sumArr = newArr.reduce((sum, current) => sum + current, 0);
console.log(sumArr);

// Nmber 2

let arr = [-1, 2, -3, 4, -5, -6, 7, 8, 9, 10];

let maxElement = arr => Math.max(...arr.filter((_, i) => i % 2 === 0));

console.log(maxElement(arr));

// number 4

let arr =[-1,2,-3,4,-5,-6,7,8,9,10];
let res = arr.sort((a,b) => a - b).slice(0, 2);
console.log(res);




