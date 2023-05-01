const prompt=require('prompt-sync')()
let num=parseInt(prompt("Enter number"))
if(num===0 || num===1)
console.log("Number is Not Prime");
else if(num===2)
{
    console.log("Number is Prime");
}
else{
let flag=0;
for(let i=2;i<num;i++)
{
    if(num%i===0)
    flag=1;
}
if(flag===1)
console.log("Number is not prime");
else
console.log("Number is prime");
}