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

**THE WHILE LOOP:**  The while loop is used when you want the loop to execute and continue executing while the specified condition is true.

**SYNTAX:**
```
initializer 
while(exit-condition) {
// code to run
final-expression
}
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

**BREAK AND CONTINUE:** 

**BREAK:**  The break command will break the loop and continue executing the code that follows after the loop (if any).

**SYNTAX:**
```
break[label];
```

**CONTINUE:**  The continue command will break the current loop and continue with the next value.

**SYNTAX:**
```
continue[label];
```

**FOR...IN STATEMENT:**  The for...in statement is used to loop (iterate) through the elements of an array or through the properties of an object.
The code in the body of the for ... in loop is executed once for each element/property.

**SYNTAX**
```
for (variable in object) {
statements
}
```


**FOR...OF STATEMENT:**  The for...of Statement creates a loop iterating over iterable objects (including Array, MAp, Set, arguments object and so on), invoking a custom iteration hook with statements to be executes for the value of each distinct property.

**SYNTAX**
```
for (variable of object) {
statement
}
```
