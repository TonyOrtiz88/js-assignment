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
        console.log(t);
    }
}
//printInitRev(20);

// 3) Write the function checkInput(x) taking one parameter x and return the string ‘number’ if x is a number; return the string ‘string’ if x is a string; and return ‘boolean’ if x is a boolean. Otherwise returns -1.
function checkInput(x) {
// if(typeof x === "number") {
    //    return typeof x
   // }else if (typeof x === "string") {
   //     return typeof x
    //}else if (typeof x === "string") {
    //    return typeof x
   // } else if (typeof x === "boolean") {
    //    return typeof x
   // }else {
     //   return -1;
   // }
  // }
   
    if(typeof x === "number" || typeof x === "string" || typeof x === "boolean" ) {
    return typeof x
    }else {
    return -1;
    }
}
//console.log(checkInput(undefined));

// 4) Write the function simpleEvenAdding(num) taking a number and add up all the even numbers from 1 to num. 
function simpleEvenAdding(num) {
   
        //store the answer
        var solution = 0;

        //loop from 1 to num
        for(var i=1; i<=num;i++) {
        //check if i is a number
        if(i % 2 === 0) {
            solution += i;
        }
    }

    return solution;
}
//or for(var i=0;i<=num;i+=2){
 //   solution += i;
//}
//console.log(simpleEvenAdding(20));

// 5) Write the function letterCapitalize(str) taking a string and capitalize the first letter of each word. The given words will be separated by only one space.

function letterCapitalize(str) {
    //seperate each word inside str
    var words = str.split(" ");

    //store the answer
    var solution = "";

    //find the first charachter in each word
    for(var i=0;i<words.length;i++){
        var upperWord = words[i].replace(words[i][0], words[i][0].toUpperCase());
        solution +=  " " + upperWord;
    }
    return solution.slice(1);
}
//console.log(letterCapitalize("hello anthony"));

// 6) Write the function simpleReverse(str) taking a string and return the string in reversed order.

function simpleReverse(str) {
   //transfer str into array 
   var strArray = str.split("");

   //reverse the array
   var revArray = strArray.reverse ();

   // transfer array back to string 
   return revArray.join("");
}

//console.log(simpleReverse("big butt"));

// 7) Write the function findDiff(arr) taking an array of numbers as parameter and return the difference between the maximum number and the minimum number (max - min). 
function findDiff(arr){
    //find maximum
    var max = Math.max(... arr);

    //find minimum
    var min= Math.min(... arr);

    //find max - min
    return max - min;
}

// console.log(findDiff([2,4,6,10,15]));

// 8) Write the function timeConvert(num) taking a number as parameter and return the number of hours and minutes the parameter converts to. Separate the number of hours and minutes with a colon.
function timeConvert(num) {
    // getting hours
    var hour = parseInt(num/60);

    // getting the minutes
    var minutes = num % 60

    // combine the answer
    return hour + ":" + minutes
}

//console.log(timeConvert(188));

// 9) Write the function findStr(str, long) taking two strings as parameters and return how many str you can find in long. Assume Str is not empty string.

function findStr(str, long) {
    var splittedArray = long.split(str);
    return splittedArray.length - 1;
}



// 10) Write the function selfDividingNumbers(left, right) taking two number bound as parameters and returns an array of every possible self dividing number between them, including the bounds.

function selfDividingNumbers(left, right) {
    var solution = [];
    for(var i=left;i<=right;i++) {
        if(isSelfDividing(i)) {
            solution.push(i)
        }
    }
    return solution;
}

function isSelfDividing(num) {
    var digits = num.toString().split("");

    for(var i=0; i< digits.length; i++) {
        if(num % digits[i] !== 0) {
            return false;
        }
    }

    return true;
}

//console.log(selfDividingNumbers(1,44));

// 11) Write the function moveZeros(nums) taking an array of numbers and move all 0’s to the end of it while maintaining the relative order of the non-zero elements. 

function moveZeros(nums) {
    //count number of zeroz
    var counter = 0;

    //store the solution array
    var solution = [];

    for(var i=0;i<nums.length;i++) {
        if(nums[i] === 0){
            counter++;
        }else {
            solution.push(nums[i]);
        }
    }
    // adding zeros
    for(var j=counter;j>0;j--){
        solution.push(0);
    }

    return solution;
}

//console.log(moveZeros([1,0,44,23,0,0,18,91]))

// 12) Create an average() function that calculates the average of an array of numbers.

function average(nums) {

if(nums.length === 0) {
    return 0;
}


// adding up all numbers
var sum = 0;

for(var i=0;i<nums.length;i++) {
    sum += nums[i];
}

//divide by its length
return sum / nums.length
}

//console.log(average([1,2,3,5,3,1]));