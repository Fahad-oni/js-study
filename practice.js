// 1

const price1 = 200;
const price2 = 300;

if (price1 === price2) {
  console.log(`they contains same vlaue.`);
}

if (price1 == price2) {
  console.log(`you can buy it at the same price`);
}

if (price1 != price2) {
  console.log(`the price is not same`);
}

if (price1 !== price2) {
  console.log(`the price is not same`);
}

if (price1 > price2) {
  console.log(`poduct1 is expensive`);
}

if (price1 < price2) {
  console.log(`poduct1 is cheaper`);
}

if (price1 >= price2) {
  console.log(`poduct1 is good`);
}

if (price1 <= price2) {
  console.log(`poduct1 is not good`);
}

// 2

const isRaining = true;

if (isRaining === true) {
  console.log(`Take an umbrella`);
}

// 3

const stock = 0;

if (stock === 0) {
  console.log(`Out of stock`);
}

// 4

const number = 62;

if (number % 2 === 0) {
  console.log(`its a positive number`);
} else {
  console.log(`its a negative number`);
}

//  5

const year = 2026;

if (year % 4 === 0) {
  console.log(`Its a leap year`);
} else {
  console.log(`Its not a leap year`);
}

//  6

const speed = 80;

if (speed > 80) {
  console.log(`overspeeding`);
} else {
  console.log(`normal speed`);
}

//  7

let age = 18;
const hasTicket = true;

if (age >= 18 && hasTicket === true) {
  console.log(`Entry Allowed`);
} else {
  console.log(`Entry is not Allowed`);
}

//  8

const isWeeked = true;
const isHoliday = false;

if (isWeeked === true || isHoliday === ture) {
  console.log(`No work today`);
}

//  9

// correct login details
const userName = 'fahad';
const password = '1234';

// userinput
const useInputName = 'fahad';
const userInputPass = '1234';

if (userName === useInputName && password === userInputPass) {
  console.log(`Login successful`);
} else {
  console.log(`Login information wrong`);
}

// 10

const mark = 95;

if (mark >= 80) {
  console.log(`Your mark is ${mark}.You got GPA 5(A+)`);
} else if (mark >= 70) {
  console.log(`Your mark is ${mark}.You got GPA 4(A)`);
} else if (mark >= 60) {
  console.log(`Your mark is ${mark}.You got GPA 3(A-)`);
} else if (mark >= 50) {
  console.log(`Your mark is ${mark}.You got GPA 3(b)`);
} else if (mark >= 45) {
  console.log(`Your mark is ${mark}.You got GPA 2(c)`);
} else if (mark >= 33) {
  console.log(`Your mark is ${mark}.You got GPA 1(d)`);
} else {
  console.log(`you are failed`);
}

// 11

let bmi = 39;

if (bmi < 18.5) {
  console.log(`Underweight`);
} else if (bmi < 18.5) {
  console.log(`Normal (Healthy weight)`);
} else if (bmi < 25) {
  console.log(`Overweight`);
} else if (bmi < 30) {
  console.log(`Obesity Class I`);
} else if (bmi < 35) {
  console.log(`Obesity Class II`);
} else if (bmi < 40) {
  console.log(`Obesity Class III (Severe obesity)`);
}

// 12
let month = 12;

if (month === 1 || month === 2) {
  console.log(`This is Summer Season`);
} else if (month === 3 || month === 4) {
  console.log(`This is Rainy Season`);
} else if (month === 5 || month === 6) {
  console.log(`This is Autum Season`);
} else if (month === 7 || month === 8) {
  console.log(`This is Late Autum Season`);
} else if (month === 9 || month === 10) {
  console.log(`This is Winter Season`);
} else if (month === 11 || month === 12) {
  console.log(`This is Spring Season`);
} else {
  console.log(`haha you entred wrong question`)
}

// 
