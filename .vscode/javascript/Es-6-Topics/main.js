//logical operator
function disName(name){
    return name;
}
let a = true;
let b = false;
// console.log(a && dispName("Pavan"));
// console.log(a || dispName("Pavan"));

// Template Literals

// let name1 = "Pavan";
// let name2 = "Kumar";
// console.log(name1 + " " + name2, `${name1} ${name2}`);

// //Ternary Operator ?

let showRecipeOne = true;

function getRecipeOneName(recipeName) {
  return recipeName;
}

function getRecipeTwoName(recipeName) {
  return recipeName;
}

if (showRecipeOne) {
  console.log(getRecipeOneName("Chicken"));
} else {
  console.log(getRecipeTwoName("Mutton"));
}

// conditon statement1 : statement2

showRecipeOne
  ? console.log(getRecipeOneName("Fish"))
  : console.log(getRecipeTwoName("Mushroom"));

// Destructring

const id = 1;
const productName = "Lenovo";
const rate = 40000;

const product = {
  id,
  productName,
  rate,
};
console.log(product);

// destructuring concept
const product2 = {
  description: "product2 Description",
  id,
  productName,
  rate,
}; // this will take from the product

const { description } = product2;
console.log(description);

//Array Destructuring
const numbers = [1, 2, 3];
// let getArrayFirstValue = numbers[0];
// let getArraySecondValue = numbers[1];

// console.log(getArrayFirstValue, getArraySecondValue);

const [arrayFirstElement, arraySecondValue, arrayThirdValue, arrayFourthValue] =
  numbers;

console.log(
  arrayFirstElement,
  arraySecondValue,
  arrayThirdValue,
  arrayFourthValue
);

// Default Parameters, Spread and Rest Operators

// function mulTwoNumbers(num1, num2) {
//   return num1 * num2;
// }
// console.log(mulTwoNumbers(2, 3));

function mulTwoNumbers(num1 = 1, num2 = 2) {
  console.log(num1, num2);
  return num1 * num2;
}
console.log(mulTwoNumbers(10, 20));

//Spread Operator
// const array2 = [2, 3, 4];
// console.log([...array2]);
// const array3 = [10, 20, 30];
// console.log(...array2, ...array3);
// console.log(40, ...array2, 50, ...array3, 60);

// Rest Operator
// function getInfo(a, b, c, d) {
//   console.log(a, b, c, d);
//   return "Pavan";
// }

// console.log(getInfo(1, 2, 3, 4));

function getInfo2(a, b, ...xyz) {
  console.log(xyz);
  return a, b;
}

console.log(getInfo2(1, 2, 3, 4, 5, 5, 6, 7, 8, 9));

// Array Methods map,filter,find,every,includes,indexOf, findIndex

const personArray = [
  {
    naeme: "Person1",
    age: 30,
    city: "BLR",
  },
  {
    name: "Person2",
    age: 40,
    city: "CTR",
  },
  {
    name: "Person3",
    age: 42,
    city: "Chennai",
  },
  {
    name: "Person4",
    age: 50,
    city: "Chennai",
  },
];

let getallNames = personArray.map((singelPerson, index) => {
  console.log(singelPerson, index);
  return `${singelPerson.name} age is ${singelPerson.age}`;
});
console.log(getallNames);

// Find & filter
// let getPersonFromChennai = personArray.find((singelPerson, index) => {
//   return singelPerson.city === "Chennai";
// });
// console.log(getPersonFromChennai);

let getPersonFromChennai = personArray.filter((singelPerson, index) => {
  return singelPerson.city === "Chennai";
});
console.log(getPersonFromChennai);

// Some & every
// let checkSomeArryMethod = personArray.some((singelPerson) => {
//   return singelPerson.age < 29;
// });
// console.log(checkSomeArryMethod);

let checkSomeArryMethod = personArray.every((singelPerson) => {
  return singelPerson.age < 60;
});
console.log(checkSomeArryMethod);

// Includes if the value is exist it will return true

const fruits = ["Banana", "Orange", "Mango"];
console.log(fruits.includes("Orange"));

let getIndexFromBlr = personArray.findIndex((singelPerson) => {
  return singelPerson.city === "BLR";
});
console.log(getIndexFromBlr);
