/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Create a variable called votingAge and assign it a value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/
let votingAge = 18
// console.log(votingAge >= 18);
/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Console log the new value of the 1st variable

   HINT: no function required
*/
let action = 'Go'
let light = 'Red'
// console.log(light === 'Red' ? 'Stop' : 'Go');




/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/

let year = '1999';
year = +year
// console.log(year);


/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

const multiply = (a,b) => a * b;




/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

const dogYears = age => age * 7

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

// function hungryDog(wt, age){
//     if (age >= 1) {
//       switch(wt) {
//         case wt <= 5: return wt * .05;
//           break;
//         case wt <= 10: return wt * 04;
//           break;
//         case wt <= 15: return wt * .03;
//           break;
//         default: return wt * .02;
//       }
//     } else {
//       switch(age) {
//         case age <= 4/12: return wt * .1;
//           break;
//         case age <= 7/12: return wt * .05;
//           break;
//         default: return wt * .04
//       }
//     }
//   }
function hungryDog(wt, age){
  if (age <= 4/12) return wt * .1
  if (age <= 7/12) return wt * .05
  if (age <= 1) return wt * .04
  if (wt <= 5) return wt * .05
  if (wt <= 10) return wt * .04
  if (wt <= 15) return wt * .03
  return wt * .02
}
// console.log(hungryDog(15,1)) // 0.44999999999999996);
/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()

Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/
function computerHand() {
  let num = Math.round(Math.random() * 3);
  switch(num) {
    case 0: return 'Rock';
    case 1: return 'Scissors';
    default: return "Paper"
  }
}
function game(user){
  if (!['rock','paper','scissors'].includes(user)) return "Invalid choice"
  let cpu = computerHand();
  if (user === 'rock' && cpu === 'paper') return "you lose!";
  if (user === 'rock' && cpu === 'scissors') return "you win!";
  if (user === 'scissors' && cpu === 'paper') return "you win!";
  if (user === 'scissors' && cpu === 'rock') return "you lose!";
  if (user === 'paper' && cpu === 'rock') return "you win!";
  if (user === 'paper' && cpu === 'scissors') return "you lose!";
    return "it's a tie";
}

  // console.log(game('rock'));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

const miles = km => (km * 0.62137119);

// console.log(miles(16));

//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/

const feet = cm => cm / 30.48
 


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start the count down from the number received 
  2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
      "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
      */
     
    //  function annoyingSong(number){
    //    if (number === 1) return `1 bottles of soda on the wall, 1 bottles of soda, take one down pass it around 0 bottles of soda on the wall`
    //    console.log(`${number} bottles of soda on the wall, ${number} bottles of soda, take one down pass it around ${number - 1} bottles of soda on the wall`)
    //    annoyingSong(number-1)
    //   }
      function annoyingSong(number){
        return `${number} bottles of soda on the wall, ${number} bottles of soda, take one down pass it around ${number - 1} bottles of soda on the wall"`
        
      }
      console.log(annoyingSong(10));
      /*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
      
//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 should return 'you got an A' 
   80-89 should return 'you got a B'
   70-79 should return 'you got a C'
   60-69 should return 'you got a D'
   below should return 'you got an F'
*/
  
function grade(score){
  switch(score){
    case score >= 90: return 'you got an A'
    case score >= 80: return 'you got a B'
    case score >= 70: return 'you got a C'
    case score >= 60: return 'you got a D'
    default: return 'you got an F'
  }
}
  
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/


// function vowelCounter(str) {
//   let count = 0;
//   length = str.length;
//   for (let i = 0; i < length; i++) {
//     if (['a','A','e','E','i','I','o','O','u','U'].includes(str[i])) count++
//   }
//   return count;
// }

const vowelCounter = str => str.split('').filter(char => char.match(/[aeiouAEIOU]/)).length

console.log(vowelCounter('hello'));

// /*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
// function foo(){
//     //console.log('its working');
//     return 'bar';
// }
// /*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
// export default{
//     foo,
//     multiply,
//     dogYears,
//     hungryDog,
//     game,
//     miles,
//     feet,
//     annoyingSong,
//     grade
// }
