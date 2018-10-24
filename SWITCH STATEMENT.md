### How To Use the Switch Statement in JavaScript
**Introduction**
Conditional statements are among the most useful and common features of all programming languages. 

In addition to if...else, JavaScript has a feature known as a switch statement. switch is a type of conditional statement that will evaluate an expression against multiple possible cases and execute one or more blocks of code based on matching cases. The switch statement is closely related to a conditional statement containing many else if blocks, and they can often be used interchangeably.

**SYNTAX**
```
switch(expression) {
    case x:
        code block
        break;
    case y:
        code block
        break;
    default:
        code block
}
```
Following the logic of the code block above, this is the sequence of events that will take place.

- The expression is evaluated
- The first case, x, will be tested against the expression. If it matches, the code will execute, and the break keyword will end the switch block.
- If it does not match, x will be skipped and the y case will be tested against the expression. If y matches the expression, the code will execute and exit out of the switch block.
- If none of the cases match, the default code block will run.

Let's make a working example of a switch statement following the syntax above.

**EXAMPLE:**
```
const day = new Date().getDay();

switch (day) {
    case 1:
        console.log("Happy Monday!");
        break;
    case 2:
        console.log("It's Tuesday. You got this!");
        break;
    case 3:
        console.log("Hump day already!");
        break;
    case 4:
        console.log("Just one more day 'til the weekend!");
        break;
    case 5:
        console.log("Happy Friday!");
        break;
    case 6:
        console.log("Have a wonderful Saturday!");
        break;
    case 7:
        console.log("It's Sunday, time to relax!");
        break;
    default:
        console.log("Something went horribly wrong...");
}
```
```
Output
'Hump day already!'
```
This code was tested on a Wednesday, which corresponds to 3, therefore the console output was 'Hump day already!'.Depending on what day of the week you are testing the code, your output will be different. 
