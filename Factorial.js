const prompt=require('prompt-sync')()
let num=parseInt(prompt("Enter the Number For which factorial to found="));
let Fact=1;
for(let  i=1;i<=num;i++)
{
 Fact*=i;   
}
console.log("Factorial of Num is"+Fact);