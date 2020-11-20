let email = document.getElementById("exampleInputEmail1");
let error = document.getElementById("error");

function validateemail() {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z ]{2,3})(.[a-z]{2,3})?$/

        if(regexp.test(email.value))
        {
            error.innerHTML ="email is valid";
            error.style.color="green";
            return true;
        }
        else{
            error.innerHTML = "email is invalid";
            error.style.color="red";
            return false
        }
}
let pwd = document.getElementById("exampleInputPassword1");
let error1 = document.getElementById("error1");

function validatepwd() {

    let  regexp1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    if(regexp1.test(pwd.value))
        {
            error1.innerHTML ="password is valid";
            error1.style.color="green";
            return true;
        }
        else{
            error1.innerHTML = "password is invalid";
            error1.style.color="red";
            return false
        }
}

    

