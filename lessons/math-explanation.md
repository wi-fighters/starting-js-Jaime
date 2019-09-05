# Math


- Math works only with numbers and it's used to perform mathematical operations

- It's a **static function** because there is no **return** inside it

- It's like a method but without following any object after a `.` (dot). And it needs an argument inside the parenthesis)

Types of numbers:

- **Float**: is a floating-point number, which means it is a number that has a decimal place. 
- **Integers**: number without a decimal point

### *With these methods we want to round to an integer number:*

## Math.round(*value*)

- Returns the resulted value of rounding the argument to the next highest integer if the decimal portion is greater than, or equal to `.5`, or the next lowest integer is less than `.5`

    `Math.round(1.5)`

        returns a 2

    `Math.round(1.51)`

        returns a 2

    `Math.round(1.49)`

        returns a 1


## Math.ceil(*value)

- Returns the smallest integer greater than, or equal to, its argument. For example:

    `Math.ceil(1.01)`

        returns a 2


## Math.floor(*value*)

- Returns the integer less than, or equal to, its argument. For example:

    `Math.floor(2.99)`

        returns a 2


## Math.min(*value1* , *value2*, *value3*, ...)

- Returns the lesser of its two arguments. For example:

    `Math.min(12,350)`

        returns 12


## Math.max(*value1* , *value2*, *value3*, ...)

- Returns the greater of its two arguments. For example:

    `Math.max(12,350)`

        returns 350
