
const prompt=require('prompt-sync')()
let num=parseInt(prompt("Enter Number till which you need sum="));
console.log("sum of natural number is="+sum(num));

function sum(num){
    if(num==0)
    return 0;

    return num+sum(num-1);
}