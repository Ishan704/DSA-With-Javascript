//Largest among three varaibles
const prompt=require('prompt-sync')()
let num1=parseInt(prompt("Enter First Number"));
let num2=parseInt(prompt("Enter Second Number"));
let num3=parseInt(prompt("Enter Third Number"));
if(num1>num2&&num1>num3)
{
console.log("Largest of Three number is="+num1);
}
else if(num2>num1&&num2>num3)
{
console.log("Largest of Three number is="+num2);
}
else
{
console.log("Largest of Three number is="+num3);
}