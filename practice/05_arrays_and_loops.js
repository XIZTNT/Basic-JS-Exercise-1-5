
// TEST 1 
// Complete the function by returning the first element 
// of the array 
// *NOTE* use the 'arr' parameter
function first(arr){
    return arr [0]
    
}

// TEST 2 
// Complete the function by returning the length
// of the array
function howMany(arr){
    return arr.length
   
}

// TEST 3
// Complete the function by returning the last
// element of the array
// *HINT* use the length property
function last(arr){
    return arr[arr.length - 1]
   
}

// TEST 4
// Use a FOR LOOP to complete the function
// return the sum of an array of numbers (all numbers added to together)
function forLoopSum(arr){
    // let sum can hold a value if assigned 0
    let sum = 0
for (i = 0; i < arr.length; i++)
    sum += arr[i] 
    i++ 
   return sum
}

// TEST 5
// use a FOR LOOP to to complete the function
// return the highest number from an array
function forLoopHighest(arr){
    let highest = 0
    for (i = 0; i < arr.length; i++){
    if (arr[i] > highest){
    highest = arr[i];
    }
    }
    return highest
    
}

// TEST 6
// use a FOREACH LOOP to complete the function
// return the sum of an array of numbers
function forEachLoopSum(arr){
    let sum = 0
    //number serves as a placeholder to interact with the array objects
    //in a foreach loop we don't need to specify the value of the variable like "let sum = 0"
    arr.forEach((number) =>{
    sum += number
    })    
   return sum
}

// TEST 7
// use a FOREACH LOOP to to complete the function
// return the highest number from an array
function forEachLoopHighest(arr){
//number serves as a placeholder to interact with the array objects
let highest = 0
//remember to capitalize "E" in for"E"ach not "foreach"
//make sure to have "number" in parenthesis
arr.forEach((number) =>{
    //condition in parenthesis and to do in object brackets
if (number > highest){highest = number}
})
return highest
}

// TEST 8
// use a WHILE LOOP to complete the function
// return the sum of all numbers in the array
function whileLoopSum(arr){
    let counter = 0;
    let sum = 0
    while (counter < arr.length){
        console.log(counter);
        sum += arr[counter]
        counter++;
    }
    return sum
    
  
}

// TEST 9
// use a WHILE LOOP to to complete the function
// return the highest number from an array
function whileLoopHighest(arr){
    let number = 0;
    let highest = 0
    while(number <= arr.length){
        console.log(number)
        //basically "number in line 106 becomes the number that is in a certain position, so if it's bigger than our highest value, we need it to change"
    if (arr[number] > highest){
        highest = arr[number];
    }
    number++;
    }
    return highest

}


module.exports = {first, howMany, last, forLoopSum, forLoopHighest, forEachLoopSum, forEachLoopHighest, whileLoopSum, whileLoopHighest}
