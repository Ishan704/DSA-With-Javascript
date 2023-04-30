const prompt=require('prompt-sync')()
let num=parseInt(prompt("Enter the Number"));
if(num<0)
{
    console.log("Number is Negative");   
}
else if(num>0)
{
    console.log("Number is Positive");
}
else
{
    console.log("Number is zero");
}