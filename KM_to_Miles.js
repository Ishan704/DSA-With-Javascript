//Program to convert km into miles
const prompt=require('prompt-sync')()
let km=parseInt(prompt("Enter KM="));
let miles=.621371*km;
console.log("The Number of miles in "+km+"km"+" is "+miles);