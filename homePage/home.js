let logoutBtn = document.getElementById("logoutBtn")
let welcomeMsg = document.getElementById("welcomeMsg")

welcomeMsg.style.color = "#17A2B8"

if (localStorage.getItem("userName") != null){
welcomeMsg.innerHTML = `Welcome ${localStorage.getItem("userName")}`
}



function logout(){
    window.location.href = "../login/index.html"
    localStorage.removeItem("userName")
}
logoutBtn.addEventListener("click" , logout)
