document.addEventListener("DOMContentLoaded", function() {
let scontainer = document.getElementById("sk-container");
let diveWomen = document.getElementById("diveWomen");
let diveMen = document.getElementById("diveMen");
let skk3 = document.getElementsByClassName("skk3");


function createCard(obj){
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
    p2.innerHTML = obj.price;
    card.append(img, cardContainer);
    btn.innerText = "Quick Add";
    cardContainer.append(p1, p2, btn);
    return card;
};

// diveMen.addEventListener("click",  ()=>{
//     window.location.href = "product.html";
//  fetchData("http://localhost:3000/products?gender=men");
// })

async function fetchData(url){
    try {
        let res = await fetch(`${url}`);
        let data = await res.json();
        console.log(data);
        appendData(data);
    } catch (error) {
        console.log(error);
    }
};

fetchData("http://localhost:3000/products?gender=women");

function appendData(data){
    // scontainer.innerHTML = "";
    data.forEach((item) => {
      let card = createCard(item);
      scontainer.append(card);
    })
}
})