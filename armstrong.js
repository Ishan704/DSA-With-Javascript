const prompt=require('prompt-sync')()
let num=parseInt(prompt("Enter Number"));
let temp=num;
let ans=0;
while(temp!=0)
{
let rem=temp%10;
ans=ans+(rem*rem*rem);
temp=Math.floor(temp / 10);
}
if(ans===num)
console.log("Is Armstrong Number");
else
console.log("Not a Armstrong Number");
