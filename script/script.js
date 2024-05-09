let container = document.querySelector("#container");
let LoginButton = document.getElementById("login-icon");
let formContainer = document.getElementById("form-container");
let closeIcon = document.getElementById("close-icon");
let wishList = document.getElementById("wish-list");
let cartContainer = document.getElementById("cart-container");
let cartIcon = document.getElementById("cart-icon");
let arrow = document.getElementById("Continue-shopping-arrow");
let searchContainer = document.getElementById("search-container");
let searchIcon = document.getElementById("search-icon");
let closeIconSearch = document.getElementById("close-icon-search");
let signUpContainer = document.getElementById("form-container-signup")
let toSignUp = document.getElementById("to-sign-up");
let toLogin = document.getElementById("to-login");
let closeIconSignup = document.getElementById("close-icon-signup");

closeIconSearch.addEventListener("click", function() {
        searchContainer.style.display = "none";
});

searchIcon.addEventListener("click", function(){
    searchContainer.style.display = "block";
});

cartIcon.addEventListener("click", function(){
    cartContainer.style.display = "block";
});

arrow.addEventListener("click", function() {
    cartContainer.style.display = "none";
});

wishList.addEventListener("click", function() {
    formContainer.style.display = "block";
});

LoginButton.addEventListener("click", function() {
    formContainer.style.display = "block";
});

closeIcon.addEventListener("click", function() {
    formContainer.style.display = "none";
});

toSignUp.addEventListener("click", function() {
    formContainer.style.display = "none";
    signUpContainer.style.display = "block";
});

toLogin.addEventListener("click", function() {
    signUpContainer.style.display = "none";
    formContainer.style.display = "block";
});

closeIconSignup.addEventListener("click", function(){
    signUpContainer.style.display = "none";
});

//signup

let signUpForm = document.getElementById("signup-form");
let loginForm = document.getElementById("login-form");



signUpForm.addEventListener("submit", function(e){
    e.preventDefault();
    signUp();
});

let userName = document.getElementById("username-field"); 
let email = document.getElementById("email-field"); 
let pwd = document.getElementById("pwd-field"); 

 function signUp(){
        let obj = {
            name: userName.value,
            email: email.value,
            password: pwd.value
        }
        // let res = await fetch("http://localhost:3000/users", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //       },
        //       body: JSON.stringify(obj)
        // });
        // let data = await res.json();
        if(userName.value == "" || email.value == "" || pwd.value == ""){
            alert("please fill the fields");
        }
        localStorage.setItem("loggedUser", JSON.stringify(obj));
        alert("Signup successful🫡");
    }

loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    let username = document.getElementById("username-siginup-field").value;
    let pwd =  document.getElementById("pwd-signup-field").value;

    let data = localStorage.getItem("loggedUser");

    if(!data){
        alert("Please sign up first.");
        return;
    }

    if (username === data.name && pwd === data.password) {
        alert("Login successful!");
    } else {
        alert("Invalid username or password");
    }
});



