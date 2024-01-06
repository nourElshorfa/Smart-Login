
let emailLoginInput = document.getElementById("emailLoginInput")
let passwordLoginInput = document.getElementById("passwordLoginInput")
let loginBtn = document.getElementById("loginBtn")
let alertMsg = document.getElementById("alertMsg")
let signupLink = document.getElementById("signupLink")
let userList = [];

if (localStorage.getItem("userInfo") != null) {
    userList = JSON.parse(localStorage.getItem("userInfo"))
}


function login(){
 if (checkInputEmpty() == true){
    getAlertMsg("All input Is Required" , "red") 
 }
 else {
    if (checkEmailPassword() == true) {
        window.location.href = "../homePage/home.html"
    } else {
        getAlertMsg("E-mail Or Password Is Incorrect" , "red") 
    }
 }
}
loginBtn.addEventListener("click" , login)

function checkEmailPassword() {
    for (let index = 0; index < userList.length; index++) {
        if (userList[index].email == emailLoginInput.value && userList[index].password == passwordLoginInput.value) {
            localStorage.setItem("userName", userList[index].userName)
            return true;
        }
    }
}

function getAlertMsg(text , color) {
    alertMsg.classList.replace("d-none","d-block");
    alertMsg.innerHTML = text;
    alertMsg.style.color = color;
}

function checkInputEmpty(){
    if (emailLoginInput.value == "" || passwordLoginInput.value == "" ){
        return true;
    }
}

signupLink.addEventListener("click", function () {
    window.location.href = "../signup.html"
    console.log("hello");
})