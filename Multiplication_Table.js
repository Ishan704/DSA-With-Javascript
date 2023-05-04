const prompt=require('prompt-sync')()
let num=parseInt(prompt("Enter the Number"));
for(let i=1;i<=10;i++)
{
    console.log(num+"*"+i+"="+num*i);
}