//Anonoymous function
//Print odd numbers in an array
var number=[1,2,3,4,5,6,7,8,9,10,11,12];
var sum = number.filter(function(item){
    return(item % 2 == 1 );
    
});
console.log("this is odd number"+ sum);

//immediately invoked function
var number1=[1,2,3,4,5,6,7,8,9,10,11,12];
number1.forEach((num) => num%2===1 && console.log(num)); 
    

//Convert all the strings to title caps in a string array



//in iif method
 (function(a){
    let b = a.split(" ");
      for(let i=0; i<b.length;i++)
       b[i] = b[i].charAt(0).toUpperCase()+b[i].slice(1);
  console.log(b.join(" "))})("this is my code i don know answer i will find")




//Convert all the strings to title caps in a string array
var all="this is my code i don know answer i will find";
var capital= (str) => str[0].toUpperCase()+str.slice(1).toLowerCase();
var words= all.split(' ').map(capital);
var capital_sentence = words.join(' ');
console.log(capital_sentence);//This Is My Code I Don Know Answer I Will Find




//iif
//Sum of all numbers in an array
console.log([1,2,3,4].reduce((a,b) => a + b,0))
   
//anonoymous function
//Sum of all numbers in an array
var arr=[1,2,3,4,5,6,7];
var ad = function(numbers){
    var total=0;
    for(const number of numbers){
        total += number;
    }
    return total;

};
console.log(ad(arr));
//Return all the prime numbers in an array

////////
let num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function isPrime(num) {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(num.filter(isPrime)); // [2, 3, 5, 7, 11, 13, 17, 19]

//Remove duplicates from an array
let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);//[ 'A', 'B', 'C' ]


//Return all the palindromes in an array
const arr = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));//[ 12321, 'did' ]
//
//Rotate an array by k times
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function rotate(array, stepsToShift) {

  for (var i = 0; i < stepsToShift; i++) {
      array.unshift(array.pop());
  }

  return array;
}
rotate();
//Rotate an array by k times
var months1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
(function(array, stepsToShift) {
  for (var i = 0; i < stepsToShift; i++) {
    array.unshift(array.pop());
}

return array;

});
//--------------------------------------------------------------------------------------------------------
//Do the below programs in arrow functions
//Rotate an array by k times
//
const arr = [1, 3, 6, 5, 4];
const rotatedArr = arr.map((e, i) => arr[arr.length-i-1])
console.log(rotatedArr)

////Remove duplicates from an array
//arrow
let char = ['A', 'B', 'A', 'C', 'B'];

let dupChars = chars.filter((c, index) => {
    return char.indexOf(c) !== index;
});

console.log(dupChars);//[ 'A', 'B','c' ]

//arrow function
//Sum of all numbers in an array

let a=[2,4,6,8,10,]
let initialvalue=0;
let sum=a.reduce( (previousValue,currentValue)=> previousValue+currentValue,initialvalue
);
console.log(sum);//30

//Print odd numbers in an array
//arrow
var arr = [1,2,3,4,5,6,7,8,9,10,11,12];
var odd = arr.filter(n => n%2)
console.log(odd)

//Convert all the strings to title caps in a string array
var all="this is my code i don know answer i will find";
var capital= (str) => str[0].toUpperCase()+str.slice(1).toLowerCase();
var words= all.split(' ').map(capital);
var capital_sentence = words.join(' ');
console.log(capital_sentence);