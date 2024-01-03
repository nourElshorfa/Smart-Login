
let nameInput = document.getElementById("nameInput")
let emailInput = document.getElementById("emailInput")
let passwordInput = document.getElementById("passwordInput")
let signupBtn = document.getElementById("signupBtn")
let hintMsg = document.getElementById("hintMsg")
let signinLink = document.getElementById("signinLink")
let userList = [];

if(localStorage.getItem("userInfo") != null){
    userList = JSON.parse(localStorage.getItem("userInfo"))
}

function signup(){
    let user = {
        userName: nameInput.value ,
        email:    emailInput.value ,
        password: passwordInput.value
    }

    if (validateEmail() == true){
        if (checkInputEmpty() == true) {
            alertMsg("All input is Required" , "#DC3544")
        } 
       
        else {
            if (checkEmailExist() == true) {
                alertMsg("Email is already Exist" , "#DC3544")
            } else {
                userList.push(user)
                localStorage.setItem("userInfo" , JSON.stringify(userList));
                alertMsg("success" , "#28A745");
                emailInput.classList.remove("is-invalid")
                clearForm();
            }
           
        }
    }
    else {
        if (checkInputEmpty() == true) {
            alertMsg("All input is Required" , "#DC3544")
        } 

        emailInput.classList.add("is-invalid")
 
    }
  
}

signupBtn.addEventListener("click",signup)


function checkInputEmpty() {
    if (nameInput.value == "" || emailInput.value == "" || passwordInput.value == "") {
    return true ;    
    }
    else {
    return false ;
    }
}

    function alertMsg(text , color){
        hintMsg.classList.replace("d-none", "d-block")
        hintMsg.innerHTML = text;
        hintMsg.style.color = color; 
    }

    function checkEmailExist() {
        for (let index = 0; index < userList.length; index++) {
            if (userList[index].email == emailInput.value)
            return true;
        }
    }

function clearForm(){
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}

signinLink.addEventListener("click" , function(){
    window.location.href = "../home.html"
})

function validateEmail(){
    let regex =   /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(emailInput.value) == true){
        return true
    } else {
        return false;
    }
}