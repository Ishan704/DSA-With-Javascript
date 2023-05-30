const prompt=require('prompt-sync')()
let a=parseInt(prompt("Enter first number"));
let b=parseInt(prompt("Enter Second number"));
let operation=prompt("Enter Operation to perform")
if(operation==="Add"||operation==="add"){
     let res=a+b;
     console.log("Addition is="+res)
}
else if(operation==="Sub"||operation==="sub"){
    let res=a-b;
    console.log("Subtraction is="+res);
}
else if(operation==="Multiply"||operation==="multiply"){
    let res=a*b;
    console.log("Multiplication  is="+res)

}
else if(operation==="divide"|| operation==="Divide")
{    let res=a/b;
    console.log("Division is="+res)
}
else
{
    console.log("Invalid");
}
