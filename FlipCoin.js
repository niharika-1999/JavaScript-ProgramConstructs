//Program to Toss the coin
var Min=0;
var Max=1;		
var num = Math.floor(Math.random()*(Max-Min+1)+Min);

console.log(" The result of Coin Flip is: " + num);
if(num < 0.5)
{
    console.log("Coin Toss Result: Tails");
}	
else
{
    console.log("Coin Toss Result: Heads");
}