1. **What are Data types & how many are there?**
There are 7 types of data types in JavaScript.

1. Boolean - The boolean type has only two values: true and false.
` var data = false;
if (data){
console.log("Booleans rule!");
} else {
console.log("Booleans are lame.");
}`

2. null - It's just a special value which has the sense of "nothing", "empty" or "value unknown".
` var n=null;
console.log(n*32);`
The output shows the value 0.

3. undefined- Variable is declared but not assigned a value.
If a variable is declared, but not assigned, then its value is exactly undefined:
` var a;
console.log(a+2);`
The output shows NAN(Not a Number) because we haven't assigned any value to the variable.

4. Number- The number type serves both for integer and floating point numbers.
There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction - and so on.
` var num = 3.6 ;
var ber = 6.4 ;
console.log(num+ber);`
The output shows the value 10.

5. String- anything that's a word.
A string in JavaScript must be quoted.
` var name ="sunil" ;
console.log("Hi ! My name is " + name);`
The output shows Hi ! My name is sunil.

6. symbol- Symbols are new to JavaScript introduced in ES6.
` var sym1 = symbol ("foo");
var sym2 = symbol ("foo");
console.log(sym1===sym2);`
Then the output shows it as false.
`console.log(string(sym1));`
Then the output shows symbol foo.

7. object- These are collection of properties.
An object can be created with figure brackets {…} with an optional list of properties.
` var my car = new object ();
my car.make = "Ford";
my.car.model = "Mustang";
console.log(my car.make);`
The output shows Ford.
