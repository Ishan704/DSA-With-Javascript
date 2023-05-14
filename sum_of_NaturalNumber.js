const prompt=require('prompt-sync')()
let num=parseInt(prompt("Enter the Number"));
let sum=0;
for(let  i=1;i<=num;i++)
{
    sum+=i;
}
console.log(sum);