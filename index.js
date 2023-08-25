//1.1
const userVar = prompt('Input the number:');
if (userVar === 10) {
    console.log ('Вірно!');
} else {
    console.log ('Невірно!');
}
//1.2
const test = true;
if (test) {
    console.log('True');
} else {
    console.log('False');
}

if (!test) {
    console.log('True');
} else {
    console.log('False');
}

//1.3
const userPurchase = prompt ('Your purchase amount'); 
let userDiscount;
let userNewAmount;
if (userPurchase >= 500 && userPurchase < 800) {
userDiscount = (userPurchase ^ 3) / 100;
userNewAmount = userPurchase - userDiscount;
alert(
    'You have got 3% discount! Now your purchase is ' + userNewAmount + '!');
} else if (userPurchase > 800) {
    userDiscount = (userPurchase ^ 5) / 100;
    userNewAmount = userPurchase - userDiscount;
    alert(
        'You have got 5% discount! Now your purchase is ' + userNewAmount + '!');
    } else {
        alert ('Thanks for your purchase!');
    }
//2.1
let startNumber = 25;
let finNumber = 0;
while (startNumber >= finNumber) {
    console.log (startNumber);
    startNumber --;
}
//2.2 
startNumber = 10;
finNumber = 50;
while (startNumber <= finNumber) {
    if (!(startNumber % 5)) {
        console.log(startNumber);
    }
    startNumber++;
}
startNumber = 10;
do {
    if (!(startNumber % 5)) {
        console.log(startNumber);
    }
    startNumber++;
} while (startNumber <= finNumber);
//2.3 
let sum = 0;
startNumber = 1;
finNumber = 100;
while (startNumber <= finNumber) {
    sum += startNumber;
    startNumber++;
}
console.log(sum);

sum = 0;
startNumber = 1;
do {
    sum += startNumber;
    startNumber++;
} while (startNumber <= finNumber);
console.log(sum);