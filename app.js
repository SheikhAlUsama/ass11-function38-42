// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function power (a,b){
//     var result = 1
//     if(b == undefined)
//             b = 2; 
//             for (i=1; i<=b; i++){
//                 result = result * a; 
//             }
//             return result;
    
// }
// console.log(power(3,2));
// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

// function check_leapyear(){
//     var year = prompt ("Enter year")

//     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
//     {
//         alert(year+" is a leap year");  
//     }
//     else
//     {
//         alert(year+" is not a leap year");  
//     }
// }
// check_leapyear();


// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2


//    function square (a,b,c){
//         var s = ( a + b + c ) / 2
//         console.log(s)
//         var area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));
//         console.log(area)
    
//     }
//     square(2,4,6)


// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
    
// function marksObtain (phy,math,chem){
//     total = phy + math + chem
//     average = total / 3
//     console.log (average)
//     per = (total /300)*100
//     console.log(per
//         )

// }
// marksObtain(75,90,55)

// function main (){
//     marks()
// }

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// // for single character as of now.

// function indexOf (word,alpha){
//     for (var i = 0; i < word.length; i++) {
//         if (word[i] === alpha) {
//           return i;
//         }
//       }
    
//       return -1;
//     }
//     var word = prompt("Enter word")
//     var wordFind = prompt("Enter Alphabet you find")
// console.log(indexOf(word,wordFind))

// 
// 6.Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


// function deleteVowel(){
// var string = "Hello everyone how are you every thIng is fine";

// string = string.replace( /[aeiouAEIOU]/g, '' );

// console.log(string)
// }
// deleteVowel();

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
//   console.log(findOccurrences());




// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// function distance (km,want){

//     function meters (){
//     var meters = km * 1000;
//     console.log(`Distance in meters is ${meters}`)
// }
//  function centimeters (){
//     var centimeters = km * 1000 * 100;
//     console.log(`Distance in centimeters is ${centimeters}`)
//  }

//  function feet (){
//     f = km * 3280.84;
//     console.log(`Distance in feet is ${f}`)
//  }
    
//  function inch (){
//     inch = km * 39370.08;
//     console.log(`Distance in inches is ${inch}`)
//  }

//  if (want == "meter"){
//      meters();
//  }
//  else if (want == "centimeter"){
//      centimeters()
//  }
//  else if (want ==  "feet"){
//      feet()
//  }
//  else if (want == "inch"){
//      inch ()
//  }
//  else {
//      console.log("Enter correct value")
//  }
   
// }

// distance (100,"meter")


// Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// function overtime (time_worked){

//     var over_time;
//     var overtime_pay =0;

    

//     if (time_worked>40){
//         over_time = time_worked -40;
//         overtime_pay += overtime_pay + (12 * overtime )
//         return overtime_pay
//     }
//     else {
//         console.log("You dont work overtime")
//     }
   

// }

// console.log(overtime(50))

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.


// function currency (){
//     var amount = prompt("Please input amount for withdraw :")
//     console.log("\n\nRequired notes of Rs. 100  :  ", amount / 100);
// 	console.log("\n\nRequired notes of Rs. 50   :  ", (amount % 100) / 50);
// 	console.log("\n\nRequired notes of Rs. 10   :  ", (((amount % 100) % 50) / 10));
// 	console.log("\n\nAmount still remaining Rs. :  ", (((amount % 100) % 50) % 10));
// }

// currency()