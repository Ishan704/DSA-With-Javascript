const prompt=require('prompt-sync')()
let fir=parseInt(prompt("Enter First Number"));
let sec=parseInt(prompt("Enter second Number"));
let answer=[];
for(let i=fir;i<=sec;i++)
{ 
    let flag=1;
    for(let j=2;j<i;j++)
    {
        if(i%j===0)
        flag=0;
    }
    if(flag===1&&i!==1)
    answer.push(i);
}
console.log(answer);