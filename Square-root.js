//square root of any number
const prompt=require('prompt-sync')()
let num=parseInt(prompt("Enter number"));
if(num===1)
console.log("Square root of 1 is 1");
else{
    let ans=num**0.5;
    console.log("Square root of number is="+ans);
}