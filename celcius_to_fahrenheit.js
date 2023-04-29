const prompt=require('prompt-sync')()
let c=parseInt(prompt("Enterthe Temperature in celsius"));
let f=(c*1.8)+32;
console.log("Temperature in Fahrenheit="+f);