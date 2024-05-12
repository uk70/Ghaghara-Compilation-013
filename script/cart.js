let wishListContainer = document.getElementById("wishlist-container");
let Productcontainer = document.getElementById("products-list");

function cartItems() {
    let cartProduduct = JSON.parse(localStorage.getItem("cartItems")) || [];

    Productcontainer.innerHTML = "";

    cartProduduct.forEach((item) => {
        let card = createCard(item);
        Productcontainer.append(card);
    });
    updatePrice(cartProduduct);
}

cartItems();

function createWishlistCard(obj) {
    let card = document.createElement("div");
    let img = document.createElement("img");
    let cardContainer = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    card.className = "wishlist-card";
    img.className = "wishlist-image";
    cardContainer.className = "wishlist-info";
    p1.className = "wishlist-title";
    p2.className = "wishlist-price";

    img.src = obj.image;
    p1.innerHTML = obj.category;
    p2.innerHTML = obj.price;

    card.append(img, cardContainer);
    cardContainer.append(p1, p2);

    return card;
}


function wishlistItems() {
    let wishlistContainer = document.getElementById("wishlist-container");
    let wishlistProducts = JSON.parse(localStorage.getItem("wishlistItems")) || [];

    wishlistContainer.innerHTML = "";

    wishlistProducts.forEach((item) => {
        let card = createWishlistCard(item);
        wishlistContainer.append(card);
    });
}



function moveItemToWishlist(obj) {
    let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    wishlistItems.push(obj);
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    cartItems();
    wishlistItems(); 
}


function createCard(obj) {
    let card = document.createElement("div");
    let imageDiv = document.createElement("div");
    let img = document.createElement("img");
    let cardContent = document.createElement("div");
    let catCross = document.createElement("div");
    let category = document.createElement("p");
    let crossIcon = document.createElement("i");
    let moveWish = document.createElement("p");
    let heartIcon = document.createElement("i");
    let bottomDiv = document.createElement("div");
    let sizes = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "-";
    let span2 = document.createElement("span");
    let span3 = document.createElement("span");
    let count = 1;
    span2.textContent = count;
    span3.textContent = "+";
    span3.addEventListener("click", () => {
        count++;
        span2.textContent = count;
    });
    span1.addEventListener("click", () => {
        if (count > 1) {
            count--;
            span2.textContent = count;
        } else {
            span2.textContent = "1";
        }
    });
    let price = document.createElement("div");
    moveWish.textContent = "Move to Wishlist ";

    card.className = "product-card";

    img.src = obj.image;
    img.alt = "hello";
    img.style.width = "100px";

    catCross.className = "category-and-cross";

    category.className = "category-para";
    category.textContent = obj.category;

    crossIcon.className = "fa-solid fa-xmark cross-icon";
    moveWish.className = "move-to-wish-list";
    heartIcon.className = "fa-regular fa-heart";
    bottomDiv.id = "bottom-size-price";
    sizes.id = "size-plus-minus";
    price.className = "price-cart-total";
    price.textContent = obj.price;

    crossIcon.addEventListener("click", () => {
        let cartitem = JSON.parse(localStorage.getItem("cartItems")) || [];

        for (let i = 0; i < cartitem.length; i++) {
            if (cartitem[i].name === obj.name) {
                cartitem.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("cartItems", JSON.stringify(cartitem));
        cartItems();
        updatePrice(cartitem);
    });

    moveWish.addEventListener("click", () => {
        moveItemToWishlist(obj);
    });
    
    card.append(imageDiv, cardContent);
    imageDiv.append(img);
    cardContent.append(catCross, moveWish, bottomDiv);
    moveWish.append(heartIcon);
    catCross.append(category, crossIcon);
    bottomDiv.append(sizes, price);
    sizes.append(span1, span2, span3);

    return card;
}

function removeFromCart(obj) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].name === obj.name) {
            cartItems.splice(i, 1);
            break;
        }
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}


function updatePrice(cartProduduct) {
    let subtotal = cartProduduct.reduce((prev, item) => prev + parseFloat(item.price), 0).toFixed(2);
    let total = document.getElementById("cart-total");
    total.textContent = `$${subtotal}`;

    let subTotal = document.getElementById("cart-subTotal");
    subTotal.textContent = `Subtotal`;
    let itemsNo = document.createElement("span");
    itemsNo.textContent = `(${cartProduduct.length} items)`;
    subTotal.append(itemsNo);
}
