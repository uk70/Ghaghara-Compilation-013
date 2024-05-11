// let changeimage = [
//     {
//     img1:""
// },
// ]

// document.addEventListener("DOMContentLoaded", function() {
// let scontainer = document.getElementById("sk-container");
// let diveWomen = document.getElementById("diveWomen");
// let diveMen = document.getElementById("diveMen");
// let skk3 = document.getElementsByClassName("skk3");


// function createCard(obj){
//     let card = document.createElement("div");
//     let img = document.createElement("img");
//     let cardContainer = document.createElement("div");
//     let p1 = document.createElement("p");
//     let p2 = document.createElement("p");
//     let btn = document.createElement("button");

//     card.className = "sk-card";
//     img.className = "product-image";
//     cardContainer.className = "product-info";
//     p1.className = "product-title";
//     p2.className = "product-price";
//     btn.className = "add-to-cart";


//     img.src = obj.image;
//     p1.innerHTML = obj.category;
//     p2.innerHTML = `$ ${obj.price}`;
//     card.append(img, cardContainer);
//     btn.innerText = "Quick Add";
//     cardContainer.append(p1, p2, btn);
//     return card;
// };

// async function fetchData(url){
//     try {
//         let res = await fetch(`${url}`);
//         let data = await res.json();
//         console.log(data);
//         appendData(data);
//     } catch (error) {
//         console.log(error);
//     }
// };

// fetchData("http://localhost:3000/products?gender=women");

// function appendData(data){
//     data.forEach((item) => {
//       let card = createCard(item);
//       scontainer.append(card);
//     })
// }
// })



document.addEventListener("DOMContentLoaded", function() {
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

    fetchData("http://localhost:3000/products");

    function appendData(data) {
  
        let womenProducts = data.filter(item => item.gender === "women");
         womenProducts.forEach((item) => {
            let card = createCard(item);
            scontainer.append(card);
        });
    }
});


