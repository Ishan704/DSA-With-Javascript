const prompt=require('prompt-sync')()
let num=parseInt(prompt("Enter First Number"));
if(num%2===0)
{
    console.log("Number is even");
}
else{
    console.log("Number is odd");
}