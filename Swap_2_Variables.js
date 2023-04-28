//program to swap two variables
//Approach1-With Extra Memory
const prompt=require('prompt-sync')()
let num1=parseInt(prompt("Enter First Number"));
let num2=parseInt(prompt("Enter Second Number"));
let temp=num1;
num1=num2;
num2=temp;
console.log("Value of Number1 is now="+num1);
console.log("Value of Number2 is now="+num2);

//Approach 2-Without Extra memory
let a=parseInt(prompt("Enter First Number"));
let b=parseInt(prompt("Enter Second Number"));
a=a+b;
b=a-b;
a=a-b;

console.log("Value of Number1 is now="+a);
console.log("Value of Number2 is now="+b);
