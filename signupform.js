// signup page validation
let phno =document.getElementById("inputphone");
let error5=document.getElementById("error5");
let  regexp5=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

function phonenumber(){
   
 
    if(regexp5.test(phno.value))
    {
       
        error5.innerHTML ="phone number is valid!";
        error5.style.color="green";
        return true;
    }
    else{
        
        error5.innerHTML ="phone number is invalid!!";
        error5.style.color="red";
        return false;
    }
}
// email
let email1 = document.getElementById("inputEmail4");
let error3 = document.getElementById("error3");

function validateemail1(){
    let regexp3= /^([A-Za-z0-9\.-]+)@([[A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
 
   
    if(regexp3.test(email1.value))
    {
        error3.innerHTML ="email is valid!";
        error3.style.color="green";
        return true;
    }
    else{
        error3.innerHTML ="email is invalid!!";
        error3.style.color="red";
        return false;
    }
    
   
}
// email end
// password
let pass1=document.getElementById("inputPassword4");
let error4=document.getElementById("error4");
let  regexp4=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

function validatepass1(){
   
 
    if(regexp4.test(pass1.value))
    {
       
        error4.innerHTML ="password is valid!";
        error4.style.color="green";
        return true;
    }
    else{
        
        error4.innerHTML ="password is invalid!!";
        error4.style.color="red";
        return false;
    }
}
// pasw strength

const input = document.getElementById('inputPassword4');
const strength = document.querySelector('.strength');

const doublestrongPw = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const strongPw = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
const mediumPw = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

input.addEventListener('keyup', function(e) {
  let password = e.target.value;
  if (mediumPw.test(password) && strongPw.test(password)) {
    strength.style.background = 'green';
  }
  else if (mediumPw.test(password) && !strongPw.test(password)) {
    strength.style.background = 'orange';
  }

  else {
    strength.style.background = 'red';
  }
})
