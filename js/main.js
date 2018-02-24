/*
Name: Matt Tounkara
Date: 02/22/2018
Description: This is the main javascript file for the to-save-cats homework.
The purpose of the homework was to implement a donation website to raise funds
for the sake of the world's cats. My teammates and I implemented four pages within
our website: the main page index.html; the about us page; the contact us page and
the donations page. This javascript file will be in charge of validating the contact
us form's data entry by the user, before being submitted to the server.
*/


// function toValidate(){
//   var fName = document.forms["theForm"]["firstName"].value;
//   var theAN = /^[\w ] + $/;
//   if((!(theAN.test(fName)) || fName === " ") || (!(theAN.test(fName)) || fName === " ")){
//     alert('You need to enter a name.');
//   }
// }
console.log('Hello there');
function validateForm() {
    var x = document.forms["theForm"]["firstName"].value;
    if (x == " ") {
        alert("Name must be filled out");
        return false;
    }
}
