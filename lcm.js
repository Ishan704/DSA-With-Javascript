const prompt=require('prompt-sync')()
let fir=parseInt(prompt("Enter First Number"));
let sec=parseInt(prompt("Enter second Number"));
var large=Math.max(fir,sec);
var small=Math.min(fir,sec);
let i=1;
while(true){
    let lcm=large*i;
    i=i+1;
    if(lcm%small===0)
    {
        console.log("lcm is ="+lcm);
        break;
        
    }

}

