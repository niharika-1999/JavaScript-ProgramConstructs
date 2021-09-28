var number;
const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (number) => 
{
c = 1
pos = []
while (number != 0)
{
    x = number % 10;
    pos += (x*c);
    number = number ;// 10
    c = c*10;
}    
console.log(pos);
rl.close();
});