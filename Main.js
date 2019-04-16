// 1) Write the function printInt(n) taking one parameter n and print all natural numbers from 1 to n in console.
function printInit(n) {
    var i = 1;
    while(i <= n) {
        console.log(i)
        i++;
    }
}
// printInit(20);

// 2) Write the function printIntRev(n) taking one parameter n and  print all natural numbers in reverse in console (from n to 1).

function printInitRev(n) {
    for(var t = n;t >= 1;t--) {
        comsole.log(t);
    }
}
//pritInitRev(20);

// 3) Write the function checkInput(x) taking one parameter x and return the string ‘number’ if x is a number; return the string ‘string’ if x is a string; and return ‘boolean’ if x is a boolean. Otherwise returns -1.
function checkInput(x) {
    if(typeof x === "number") {
        return typeof x
    }else if (typeof x === "string") {
        return typeof x
    }else if (typeof x === "string") {
        return typeof x
    } else if (typeof x === "boolean") {
        return typeof x
    }else {
        return -1;
    }
   }
// or if (typeof x === "number" || typeof x === "string" || type === "boolean" ) {
// return typeof x
//}else {
// return -1;
//} 
// console.log(checkInput(132))

// 4) Write the function simpleEvenAdding(num) taking a number and add up all the even numbers from 1 to num. 
function simpleEvenAdding(num) {
    //store the answer
    var solotion = 0;


    //loop from 1 to num
    for(var i=1; i<=num;i++)
    //check if i is a number
    if(i % 2 === 0) {
        solotion += i;
    }
}
//or for(var i=1;i<=num;1+=2){
 //   return solution;}
 // console.log(simpleEvenAdding(12))

// 5) Write the function letterCapitalize(str) taking a string and capitalize the first letter of each word. The given words will be separated by only one space.
function letterCapitalize(str) {
    var words = str.split("");

    //store the answer
    var solotion = "";

    //find the first charachter in each word
    for(var i=0;i<words.length;i++){
        var UpperWord = words[i][0], words[i][0].toUppercCase()
        solotion += " " + UpperWord;
    }
}

// 6) Write the function simpleReverse(str) taking a string and return the string in reversed order.
function simpleReverse(str) {
   //transfer str into array 
   var strArray
}

// 7) Write the function findDiff(arr) taking an array of numbers as parameter and return the difference between the maximum number and the minimum number (max - min). 
function findDiff(arr){
    //find maximum
    var max= Math.max(... arr);
    //find minimum
    var max= Math.min(... arr);
    //find max - min
    return max - min;

// 8) Write the function timeConvert(num) taking a number as parameter and return the number of hours and minutes the parameter converts to. Separate the number of hours and minutes with a colon.
function timeConvert()
// 9) Write the function findStr(str, long) taking two strings as parameters and return how many str you can find in long. Assume Str is not empty string.
function findStr(str, long) {
    var splittedArray = long.split(str);
    return splittedArray.length - 1;
}
// 10) Write the function selfDividingNumbers(left, right) taking two number bound as parameters and returns an array of every possible self dividing number between them, including the bounds.
function selfDividingNumbers(left, right) {

}
function isSelfDividing(num) {
    var digits = num.toString
}
// 11) Write the function moveZeros(nums) taking an array of numbers and move all 0’s to the end of it while maintaining the relative order of the non-zero elements. 
function moveZeros(num) {
    //count number of zeroz
    var counter = 0;
    //store the solution
    var solution = [];

    for(var i=0;i<nums.length;i++) {
        if(nums[i] === 0){

        }
    }
    if(nums[i] === 0){

    }
}
// 12) Create an average() function that calculates the average of an array of numbers.
function average(nums) {
// adding up all numbers
var sum = 0;

for(var i=0;i<)

//
}