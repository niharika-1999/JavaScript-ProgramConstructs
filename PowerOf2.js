var n = process.argv[2]; 
var i = 0; 
var powerOf2 = 1; 

// repeat until i equals n
while (i <= n) 
{
console.log("2 ^ " + i + " = " + powerOf2); // print power of two
powerOf2 = 2 * powerOf2; 
i = i + 1;
}