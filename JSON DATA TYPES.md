### JSON - DATA TYPES

JSON format supports the following data types -

S. No. | Type & Description
-- | --
1 | **Number:**  double- precision floating-point format in JavaScript
2 | **String:**  double-quoted Unicode with backslash escaping
3 | **Boolean:**  true or false
4 | **Array:**  an ordered sequence of values
5 | **Value:**  it can be a string, a number, true or false, null etc
6 | **Object:**  an unordered collection of key:value pairs
7 | **Whitespace:**  can be used between any pair of tokens
8 | **null:**  empty


**Number**
- It is a double precision floating-point format in JavaScript and it depends on implementation.
- Octal and hexadecimal formats are not used.
- No NaN or Infinity is used in Number.

The following table shows the number types:

S. No. | Type & Description
-- | --
1 | IntegerDigits 1-9, 0 and positive or negative
2 | FractionFractions like .3, .9
3 | ExponentExponent like e, e+, e-, E, E+, E-

**Syntax**
```
var json-object-name = { string : number_value, .......}
```


**String**

- It is a sequence of zero or more double quoted Unicode characters with backslash escaping.
- Character is a single character string i.e. a string with length 1.

**Syntax**
```
var json-object-name = { string : "string value", .......}
```


**Boolean**
- It includes true or false values.

**Syntax**
```
var json-object-name = { string : true/false, .......}
```


**Array**
- It is an ordered collection of values.
- These are enclosed in square brackets which means that array begins with .[. and ends with .]..
- The values are separated by , (comma).
- Array indexing can be started at 0 or 1.
- Arrays should be used when the key names are sequential integers.

**Syntax**
```
[ value, .......]
```


**Object**
- It is an unordered set of name/value pairs.
- Objects are enclosed in curly braces that is, it starts with '{' and ends with '}'.
- Each name is followed by ':'(colon) and the key/value pairs are separated by , (comma).
- The keys must be strings and should be different from each other.
- Objects should be used when the key names are arbitrary strings.

**Syntax**
```
{ string : value, .......}
```


**Whitespace**
It can be inserted between any pair of tokens. It can be added to make a code more readable.

**Syntax**
```
{string:" ",....}
```


**null**
It means empty type.

**Syntax**
```
null
```

### JSON.parse()
**JSON.parse()** can take an second argument for a reviver function that can transform the object values before they are returned. Here the object’s values are uppercased in the returned object of the parse method.

**NOTE:**  Trailing commas are not valid in JSON, so JSON.parse() throws if the string passed to it has trailing commas.


### JSON.stringify()
**JSON.stringify()** can take two additional arguments, the first one being a replacer function and the second a String or Number value to use as a space in the returned string.

The replacer function can be used to filter-out values because any value returned as undefined will be out of the returned string.
