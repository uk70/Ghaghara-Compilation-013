
// abdulla
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
let logoutContainer = document.getElementById("logout-container");
let logoutBtn = document.getElementById("logout-btn");
let userNameShow = document.getElementById("user-name-show");
let isLoggedIn = false;
let uniqueId = 0;
logoutBtn.addEventListener("click", function() {
    logoutUser();
});
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
    if (isLoggedIn) {
        //alert("You are already logged in. Please logout to login again.");
        if(logoutContainer.style.display === "none"){
            logoutContainer.style.display = "block"
        }else{
            logoutContainer.style.display = "none"
        }
    } else {
        formContainer.style.display = "block";
    }
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
let userURL = "http://localhost:3000/users"
let signUpForm = document.getElementById("signup-form");
let loginForm = document.getElementById("login-form");
let userName = document.getElementById("username-field"); 
let userEmail = document.getElementById("email-field"); 
let userPassword = document.getElementById("pwd-field"); 
let loginUserName = document.getElementById("username-siginup-field");
let loginUserPwd = document.getElementById("pwd-signup-field");
let btn = document.getElementById("signup-button-2");
let loginBtn = document.getElementById("signup-button");
// signUpForm.addEventListener("submit", (e)=>{e.preventDefault});
 btn.addEventListener("click", (e) => {
    e.preventDefault();
    sendUserData();
 });
loginBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    userLogin();
})
async function verifyUserData(){
    try{
        let res = await fetch(userURL);
        let data = await res.json();
        for(let element of data){
            if(element.username == userName.value){
                return true
            } 
        }
    }
    catch(err){
        console.log(err);
    }
    return false;
}
async function sendUserData(){
    if(userName.value && userEmail.value && userPassword.value){
        if(userPassword.value.length < 5) alert("Password must contain at least 6 characters")
        else if(await verifyUserData()) alert(`Username is already registered!`);
        else{
            let newObj = 
            {
            "id": uniqueId,     
            "username": userName.value,
             "email" : userEmail.value,
             "password" : userPassword.value,
            };
            uniqueId++;
            try{
                    await fetch(userURL,{
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newObj),
                });
                alert("Registered Successful");
                signUpContainer.style.display = "none";
                isLoggedIn = true;
                logoutContainer.style.display = "none";
                userNameShow.innerText = `hello ${userName.value}`;
            }
            catch(err){
                console.log(err);
            }
        }
    }
    else{
        alert("Fill all the fields")
    }
};
async function userLogin(){
    if(loginUserName.value && loginUserPwd.value){
        try {
            let res = await fetch(userURL);
            let data = await res.json();
            let found = null;
            for (let user of data) {
                if (user.username === loginUserName.value && user.password === loginUserPwd.value) {
                    found = user;
                    break;
                }
            }
            if (found) {
                alert("Login successful");
                formContainer.style.display = "none";
                isLoggedIn = true;
                logoutContainer.style.display = "none";
                userNameShow.innerText = `hello ${found.username}`;
            } else {
                alert("Please sign up first");
            }
        } catch (error) {
            console.log(error);
        }
    }
};
fetchData();
async function fetchData(){
    try {
        let res = await fetch(userURL);
        let data = await res.json();
        uniqueId = data.length + 1;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
function logoutUser() {
    isLoggedIn = false;
    userNameShow.innerText = "";
    logoutContainer.style.display = "none";
    formContainer.style.display = "block";
}
// abdulla
// 
// shreya
let scontainer = document.getElementById("sk-container");
 let diveWomen = document.getElementById("diveWomen");
    let skk3 = document.getElementsByClassName("skk3");
    let lowToHigh = document.getElementById("lowtohigh");
    let highToLow = document.getElementById("hightolow");
    let productSelect = document.getElementById("product1"); 
function createCard(obj) {
        let card = document.createElement("div");
        let img = document.createElement("img");
        let cardContainer = document.createElement("div");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let btn = document.createElement("button");

       card.className = "sk-card";
        img.className = "product-image";
        cardContainer.className = "product-info";
        p1.className = "product-title";
        p2.className = "product-price";
        btn.className = "add-to-cart";

        img.src = obj.image;
        p1.innerHTML = obj.category;
        p2.innerHTML = `${obj.price}`;
        card.append(img, cardContainer);
        btn.innerText = "Quick Add";
        cardContainer.append(p1, p2, btn);
        return card;
    };
async function fetchData(url) {
        try {
            let res = await fetch(url);
            let data = await res.json();
            console.log(data);
            appendData(data);
        } catch (error) {
            console.log(error);
        }
    };
fetchData("http://localhost:3000/products?gender=women");
function appendData(data) {
  
        // let womenProducts = data.filter(item => item.gender === "women");
         data.forEach((item) => {
            let card = createCard(item);
            scontainer.append(card);
        });
    }
// ricky

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselCards = document.querySelector('.carousel-cards');
const cardWidth = 420; // Width of each card including margin and image width
const numCardsToShow = 1; // Number of card-image pairs to show at once
let cardIndex = 0;

nextBtn.addEventListener('click', () => {
    cardIndex++;
    if (cardIndex > carouselCards.children.length - numCardsToShow) {
        cardIndex = 0;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    cardIndex--;
    if (cardIndex < 0) {
        cardIndex = carouselCards.children.length - numCardsToShow;
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -cardIndex * cardWidth;
    carouselCards.style.transform = `translateX(${offset}px)`;
}







