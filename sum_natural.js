const prompt=require('prompt-sync')()
let num=parseInt(prompt("Enter Number till which you need sum="));
let res=0;
for(let i=1;i<=num;i++)
{
    res+=i;
}
console.log("Sum till"+" "+num+" is="+res);