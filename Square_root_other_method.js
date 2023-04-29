//Program to find square root of given number
const prompt=require('prompt-sync')()
let num=parseInt(prompt("Enter number"));
if(num===1)
console.log("Square root of 1 is 1");
for(i=2;i*i<=num;i++)
{
    if(i*i===num)
    {
        console.log("Square rooot of Number "+num+" is="+i);
    }
}