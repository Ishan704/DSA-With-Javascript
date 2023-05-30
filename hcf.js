const prompt=require('prompt-sync')()
let a=parseInt(prompt("Enter first number"));
let b=parseInt(prompt("Enter Second number"));
let hcf=1;
let res=Math.min(a,b);
for(let i=1;i<=res;i++)
{
    if(a%i===0&&b%i===0)
    hcf=i;
}
console.log("hcf of two num"+hcf);