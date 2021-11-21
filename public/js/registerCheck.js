const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('confpassword');
const register = document.getElementById('register');
const smallConfPassword = document.getElementsByClassName('smallConfPassword');
const valBody = document.getElementsByClassName('valBody');
const valemail = document.getElementsByClassName('valemail');
const valpass = document.getElementsByClassName('valpass');
const emailcharacters = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

register.disabled = true;

password.onkeyup = () =>{
    // validsate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(password.value.match(lowerCaseLetters)) {
      letter.classList.remove("conditions");
      letter.classList.add("validconditions");
    } else {
      letter.classList.remove("validconditions");
      letter.classList.add("conditions");
    }
  
    // validsate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(password.value.match(upperCaseLetters)) {
      capital.classList.remove("conditions");
      capital.classList.add("validconditions");
    } else {
      capital.classList.remove("validconditions");
      capital.classList.add("conditions");
    }
  
    // validsate numbers
    var numbers = /[0-9]/g;
    if(password.value.match(numbers)) {
      number.classList.remove("conditions");
      number.classList.add("validconditions");
    } else {
      number.classList.remove("validconditions");
      number.classList.add("conditions");
    }
  
    // validsate length
    if(password.value.length >= 8) {
      passlength.classList.remove("conditions");
      passlength.classList.add("validconditions");
    } else {
      passlength.classList.remove("validconditions");
      passlength.classList.add("conditions");
    }

}

  