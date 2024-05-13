
let scontainer = document.getElementById("sk-container");
let womenButton = document.getElementById("women-header-filter");
let menButton = document.getElementById("men-header-filter");
let shopNowHeader = document.getElementById("shop-now-header-part");
let searchContainerInputProductPage = document.getElementById("search-container-input-product-page");
let searchIconProductpage = document.getElementById("search-icon-productpage");

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

    btn.addEventListener("click", ()=> {
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push({
            name: obj.name,
            category: obj.category,
            price: obj.price,
            image: obj.image
        })
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    })
    

    img.src = obj.image;
    p1.innerHTML = obj.category;
    p2.innerHTML = obj.price;
    card.append(img, cardContainer);
    btn.innerText = "Quick Add";
    cardContainer.append(p1, p2, btn);
    return card;
};

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

fetchData("https://frank-oak-live-servers.onrender.com/products");



searchIconProductpage.addEventListener("click", ()=>{
    scontainer.innerHTML = "";
    fetchData(`https://frank-oak-live-servers.onrender.com/products?category_like=${searchContainerInputProductPage.value}`)
})

womenButton.addEventListener("click", ()=>{
    fetchData("https://frank-oak-live-servers.onrender.com/products?gender=women");
});

menButton.addEventListener("click", ()=> {
    fetchData("https://frank-oak-live-servers.onrender.com/products?gender=men");
})



function appendData(data){
    scontainer.innerHTML = "";
    data.forEach((item) => {
        let card = createCard(item);
        scontainer.append(card);
    })
}