console.log("JS Connected");

             // CHAPTER : 10
      // Q : 01
      
// var multiDimenArray =[
//     [],
//     [],
//     [],
//     []
// ];

      // Q : 02

// var matrix =[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];      

     // Q : 03

// for(var i = 1;i <=10; i++)[
//     document.write(i + "</br>"),
// ];     
      
     // Q : 04

// var table =+prompt("Enter a number to show its multiplication table");
// var length =+prompt("Enter a length of multiplication table");
// document.write("Multiplication table of " + table + " Length " + length + "</br>");
// for(var i =1; i<=length;i++){
//     document.write(table + " * " + i + " = " + table * i + "</br>");

// };

    // Q : 05
 
// var fruits =["apple" , "banana" , "mango" , "orange" , "strawberry"];
// for(var i =0;i<=fruits.length-1;i++)[
//     document.write(fruits[i] + "</br>"),
// ];  
// for(var i =0;i<=fruits.length-1;i++)[
//     document.write("Element at index " + i + " is " + fruits[i] + "</br>"),
// ];

    // Q : 06
    
// document.write("<h1>Counting:</h1>");  // Counting  
// for(var i =1; i <= 15;i++)[
//     document.write(i + " , "),
// ];    

// document.write("<h1>Reverse counting:</h1>");   // Reverse Counting 
// for(var i =10; i >= 1;i--)[
//     document.write(i + " , "),
// ];  

// document.write("<h1>Even:</h1>");    // Even
// for(var i =0; i<= 20;i +=2)[
//     document.write(i +" , "),
// ];

// document.write("<h1>Odd:</h1>");    // Odd
// for(var i =1; i<= 20;i +=2)[
//     document.write(i + " , "),
// ];

// document.write("<h1>Series:</h1>");    // Series
// for(var i =2; i<= 20;i +=2)[
//     document.write(i +"k" + " , "),
// ];


       // Q : 07

// var cakes = ["cake", "apple pie", "cookie", "chips", "patties"];
// var  userCake =prompt("Welcome to AR bakers. What do you want to order sir/ma'am?" , "cookie");
// var flag =false;
// for(var i =0;i<=cakes.length-1;i++){
    
//     if(cakes[i] === userCake){
//         alert(cakes[i] + " is available at index " + i + " in our bakery");
//         flag=true
//      };
     
// };
// if(flag===false){
//     alert("We are sorry sir, " + userCake + " is not available in our bakery")
// }  


       // Q : 08

// var nums =[24 , 53 , 78 , 91 , 12];
// document.write("Array items: " + nums + "</br>");
// nums.sort((a,b) =>b-a);
// document.write("The largest number is " + nums[0]);       

       // Q : 09

// var nums =[24 , 53 , 78 , 91 , 12];
// document.write("Array items: " + nums + "</br>");
// nums.sort((a,b) =>a-b);
// document.write("The smallest number is " + nums[0]);  

      // Q : 10

// for(var i =1;i<=100;i++){
//     if(i % 5===0){
//         document.write(i + " , ");
//     };
// };      