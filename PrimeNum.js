var num;
var i;
var flag = 0;
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a num: ', (year) => {

for (i = 2; i <= num / 2; ++i)
 {
    // condition to check non-prime num
    if (num % i == 0) 
    {
      flag = 1;
      break;
    }
}

if (num == 1) 
{
    console.log("1 is neither prime nor composite.");

} 
else 
{
    if (flag == 0)
      console.log(num + " is a Prime Number.");
    else
      console.log(num + " is not a Prime Number.");
}
});