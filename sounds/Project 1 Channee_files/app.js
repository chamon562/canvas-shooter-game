// console.log('app.js is linked')

// need 2 buttons left and right 
// need an input bar that puts the numner in
// uptop above the input bar shows the result of the number being plus or minus

let clickAdd = 0;

//making add button

let buttAdd = document.getElementById('plus');

//making minus button
let buttMinus = document.getElementById('minus');

//making input bar to grab element then use later
let input = document.getElementById('input');

//this is to get the h1 id and display on html
let output = document.getElementById('output');
//making addEventListener to listen for click to add the number
//and have a function to do what we need in it
buttAdd.addEventListener('click', () => {
    //start with input and give . value
    //The parseInt() function parses a string and returns an integer.
    //https://www.w3schools.com/jsref/jsref_parseint.asp#:~:text=The%20parseInt()%20function%20parses,number%20to%20a%20decimal%20number.
    //pass in current value input.value then add 1
 input.value = parseInt(input.value) + 1;
 output.innerText = parseInt(input.value);
    //can do the same for subtract
    // document.getElementById('output')

})
buttMinus.addEventListener('click', () => {
   input.value = parseInt(input.value) - 1;
   output.innerText = parseInt(input.value);
  
})

//to get add output to display on screen
// https://www.w3schools.com/jsref/dom_obj_number.asp
//want this function to show the input i add to it
// function addNum(){
//     //grabbing the id of input
//     document.getElementById(input);
//     //displaying with .innertext for the function
//     document.getElementById('output').innerText = buttAdd
// }
