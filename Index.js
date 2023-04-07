function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    console.log(parameterVariable)

    // Write a line of code that prints parameterVariable to stdout using console.log:
    
}

**************************
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    
    console.log(firstInteger + parseInt(secondInteger));
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
       
    console.log(firstDecimal + parseFloat(secondDecimal));
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
   
    console.log(firstString + secondString);
    
    
}

********************

function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    
    perimeter = 2*(length + width)
    return perimeter;
}

******************
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}


******************************

function vowelsAndConsonants(s) {
    let vowlesArr = ["a", "e", "i", "o", "u"];
    
    for (let i of s){
        if(vowlesArr.includes(i)) {
            console.log(i)
        }
    }
    
    for (let i of s){
        if(!vowlesArr.includes(i)){
            console.log(i)
        }
    }
    
}

*********************
    'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    switch(true) {
    // Write your code here
    case 'aeiou'.includes(s[0]):
    letter = "A";
    break;
    case 'bcdfg'.includes(s[0]):
    letter = "B";
    break;
    case 'hjklm'.includes(s[0]):
    letter = "C";
    break;
    case 'npqrstvwxyz'.includes(s[0]):
    letter = "D";
    break;
   
    }
    return letter
}

******************************
function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    
    const PI = Math.PI;
    let r = parseFloat(readLine());
    // Print the area of the circle:
    let area = (PI*Math.pow(r, 2))
    console.log(area)
    // Print the perimeter of the circle:
 let perimeter = 2 * PI *r
console.log(perimeter)

*********************

function getGrade(score) {
    let grade;
    // Write your code here\
    if(score <= 5){
        return 'F'
    }
    else if (score <= 10){
        return 'E'
    }
    else if (score <= 10){
        return 'E'
    }
    else if (score <= 15){
        return 'D'
    }
    else if (score <= 20){
        return 'C'
    }
    else if (score <= 25){
        return 'B'
    }else if (score <= 30){
        return 'A'
    }
    return grade;
}

******************************

function getSecondLargest(nums) {
    // Complete the function
    let sorted = nums.sort((a, z) => z-a) 
 sorted = Array.from(new Set(sorted))
 return sorted[1];
        
    
}

************************
function reverseString(s) {
    try {
     s = s.split("").reverse().join("");
        
    }catch(err){
        console.log(err.message)
    }finally{
        console.log(s)
    }
    
    
}

*********************************
function isPositive(a) {
    if(a > 0){
        return "YES"
    } else if ( a === 0) {
       throw new Error ("Zero Error")
        
    }else {
        throw new Error ("Negative Error")
    }
    
}

****************************
function Rectangle(a, b) {
    let Rectange  = {
        length: a,
        width: b,
        perimeter:2*(a+b),
        area:(a*b)
        
    }
    return Rectange
}

*************************

function getCount(objects) {
    var count = 0 ;
    for (var i in objects){
        if (objects[i].x == objects[i].y){
            count ++; 
        }
    }
    return count;
}

**********************

class Polygon {
    sum = 0; 
    constructor (arr){
        this.arr = arr
    }
    perimeter(){
        this.arr.forEach(element => {
            this.sum += element
        })
        return this.sum
    }
}

*************************
Rectangle.prototype.area = function(){
    return this.w
 * this.h }
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle {
    constructor(w){
        super(w, w);
    }
}

*********************
function sides(literals, ...expressions) {
    const [A, P] = expressions;
    const results = [];
    results.push((P+Math.sqrt((P*P)- 16 * A))/ 4);
    results.push((P-Math.sqrt((P*P)- 16 * A))/ 4);
    return results.sort()
    
    
}
*******************
function modifyArray(nums) {
  let result = nums.map(num => {
      if (num%2 == 0){
          return 2* num;
      }else if (num%2!=0){
          return 3 * num;
      }
  }) 
  return result
}
