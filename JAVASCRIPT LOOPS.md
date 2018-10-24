### JAVASCRIPT LOOPS
**INTRODUCTION**
Loops in JavaScript are used to execute the same block of code a specified number of times or while a specified condition is true.

Very often when you write code, you want the same block of code to run over and over again in a row. Instead of adding several almost equal lines in a script we can use loops to perform a task like this.

In JavaScript there are different kinds of loops.
**FOR STATEMENT** 
**WHILE STATEMENT**
**DO...WHILE STATEMENT**
**BREAK STATEMENT**
**CONTINUE STATEMENT**
**FOR...IN STATEMENT**
**FOR...OF STATEMENT**
**LABELED STATEMENT**

**THE FOR-LOOP:**  The FOR-LOOP is used when you know in advance how many times the script should run.

**SYNTAX:**
```
for (initializer;exit-condition;final-expression){
// code to run
}
```

**EXAMPLE:**
```
<html>
<body>
<script type="text/javascript">
for (i = 1; i <= 6; i++)
{
  document.write("<h" + i + ">This is header " + i)
  document.write("</h" + i + ">")
}
</script>
</body>
</html>
```

**THE WHILE LOOP:**  The while loop is used when you want the loop to execute and continue executing while the specified condition is true.

**SYNTAX:**
```
initializer 
while(exit-condition) {
// code to run
final-expression
}
```
Explanation: The example below defines a loop that starts with i=0. The loop will continue to run as long as i is less than, or equal to 10. i will increase by 1 each time the loop runs.
```
<html>
<body>
<script type="text/javascript">
var i=0
while (i<=10)
{
document.write("The number is " + i)
document.write("<br />")
i=i+1
}

</script>
</body>
</html>
```
**RESULT**
```
The number is 0
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
The number is 10
```

**THE Do...WHILE LOOP:**  The do...while loop is a variant of the while loop. This loop will always execute a block of code ONCE, and then it will repeat the loop as long as the specified condition is true.

**SYNTAX:**
```
initializer 
do{
// code to run
final-expression
} while(exit-condition)
```

**EXAMPLE:**
```
<html>
<body>
<script type="text/javascript">
var i=0
do 
{
document.write("The number is " + i)
document.write("<br />")
i=i+1
}
while (i<0)
</script>
</body>
</html>
```
**RESULT**
```
The number is 0
```

**BREAK AND CONTINUE:** 

**BREAK:**  The break command will break the loop and continue executing the code that follows after the loop (if any).

**SYNTAX:**
```
break[label];
```
**EXAMPLE:**
```
<html>
<body>
<script type="text/javascript">
var i=0
for (i=0;i<=10;i++)
{
if (i==3){break}
document.write("The number is " + i)
document.write("<br />")
}
</script>
</body>
</html>
```
**RESULT**
```
The number is 0
The number is 1
The number is 2
```

**CONTINUE:**  The continue command will break the current loop and continue with the next value.

**SYNTAX:**
```
continue[label];
```
**EXAMPLE:**
```
<html>
<body>
<script type="text/javascript">
var i=0
for (i=0;i<=10;i++)
{
if (i==3){continue}
document.write("The number is " + i)
document.write("<br />")
}
</script>
</body>
</html>
```
**RESULT**
```
The number is 0
The number is 1
The number is 2
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
The number is 10
```

**FOR...IN STATEMENT:**  The for...in statement is used to loop (iterate) through the elements of an array or through the properties of an object.
The code in the body of the for ... in loop is executed once for each element/property.

**SYNTAX**
```
for (variable in object) {
statements
}
```

**EXAMPLE:**  
```
<html>
<body>
<script type="text/javascript">
var x
var mycars = new Array()
mycars[0] = "Audi"
mycars[1] = "Volvo"
mycars[2] = "BMW"
for (x in mycars)
{
document.write(mycars[x] + "<br />")
}
</script>
</body>
</html>
```
**FOR...OF STATEMENT:**  The for...of Statement creates a loop iterating over iterable objects (including Array, MAp, Set, arguments object and so on), invoking a custom iteration hook with statements to be executes for the value of each distinct property.

**SYNTAX**
```
for (variable of object) {
statement
}
```
