const prompt=require('prompt-sync')()
let num=parseInt(prompt("Enter Number"));
for(let i=1;i<=num;i++)
{
    if(num%i==0)
    console.log(i+" ");
}