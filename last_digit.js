const prompt=require('prompt-sync')()
let fir=parseInt(prompt("Enter first Number"));
let sec=parseInt(prompt("Enter second Number"));
if(fir%10===sec%10)
{
    console.log("First and second number have same last digit");
}
else{
    console.log("First and second number do not have same last digit");   
}