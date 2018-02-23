// function toValidate(){
//   var fName = document.forms["theForm"]["firstName"].value;
//   var theAN = /^[\w ] + $/;
//   if((!(theAN.test(fName)) || fName === " ") || (!(theAN.test(fName)) || fName === " ")){
//     alert('You need to enter a name.');
//   }
// }

function validateForm() {
    var x = document.forms["theForm"]["firstName"].value;
    if (x == " ") {
        alert("Name must be filled out");
        return false;
    }
}
