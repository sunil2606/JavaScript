### JAVASCRIPT CONDITIONAL STATEMENTS

**How to use Conditional Statements**  
Conditional Statements are used to decide the flow of execution based on different conditions. If a Condition is True , you can perform one action and if the Condition is False, you can perform another action.

### DIFFERENT TYPES OF CONDITIONAL STATEMENTS  
There are mainly three types of Conditional Statements in JavaScript.
1. IF statement
2. IF...ELSE statement
3. IF...ELSE IF...ELSE statement

**IF Statement**
You can use IF statement if you want to check only a specific condition.
**SYNTAX:**    if ( condition)
                         {
                             lines of code to be executed IF condition is true.
                          }
**EXAMPLE:**    
```
 <html>
<head>
	<title>IF Statments!!!</title>
	<script type="text/javascript">
		var age = prompt("Please enter your age");
		if(age>=18)
		document.write("You are an adult <br />");
		if(age<18)
		document.write("You are NOT an adult <br />");
	</script>
</head>
<body>
</body>
  </html>
```




**IF...ELSE Statement**
You can use IF...ELSE statement if you have to check two conditions and execute a different set of codes.
**SYNTAX:**  if (condition)
                      {
                          lines of code to be executed if the condition is true
                       }
                        else
                       { 
                          lines of code to be executed if the condition is false
                        }
**EXAMPLE:**  
```
    <html>
<head>
	<title>If...Else Statments!!!</title>
	<script type="text/javascript">
		// Get the current hours
		var hours = new Date().getHours();
		if(hours<12)
		document.write("Good Morning!!!<br />");
		else
		document.write("Good Afternoon!!!<br />");
	</script>
</head>
<body>
</body>
  </html>
```



**IF...ELSE IF...ELSE Statement:**
You can use If….Else If….Else statement if you want to check more than two conditions.
**SYNTAX:**
if (condition1)
{
lines of code to be executed if condition1 is true
}
else if(condition2)
{
lines of code to be executed if condition2 is true
}
else
{
lines of code to be executed if condition1 is false and condition2 is false
}

**EXAMPLE:**
```
<html>
<head>
	<script type="text/javascript">
		var one = prompt("Enter the first number");
		var two = prompt("Enter the second number");
		one = parseInt(one);
		two = parseInt(two);
		if (one == two)
			document.write(one + " is equal to " + two + ".");
		else if (one<two)
			document.write(one + " is less than " + two + ".");
		else
			document.write(one + " is greater than " + two + ".");
	</script>
</head>
<body>
</body>
</html>
```

