// // let URL = "http://localhost:3000/products?gender=women";
// let a = document.getElementById("diveWomen");




// function createCards(data) {
//     let skContainer = document.getElementById("sk-container");
  
//     data.forEach(item => {
//         let card = document.createElement("div");
//         card.classList.add("sk-card");
//         card.innerHTML = `
//             <img src="${item.image}" alt="${item.name}" class="product-image">
//             <div class="product-info">
//                 <p class="product-title">${item.category}</p>
//                 <p class="product-price">$${item.price}</p>
//                 <button class="add-to-cart">Quick Add</button>
//             </div>
//         `;
//         skContainer.appendChild(card);
//     });
//     a.addEventListener("click", ()=>{
    
//     skContainer.innerHTML = "";      
//     fetch("http://localhost:3000/products?gender=women")
//     .then(response => response.json())
//     .then(data => createCards(data))
//     .catch(error => console.error('Error fetching data:', error));
//     })
//   }


//   fetch("http://localhost:3000/products")
//   .then(response => response.json())
//   .then(data => createCards(data))
//   .catch(error => console.error('Error fetching data:', error));
  





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
//     p2.innerHTML = obj.price;
//     card.append(img, cardContainer);
//     btn.innerText = "Quick Add";
//     cardContainer.append(p1, p2, btn);
//     return card;
// };

// diveMen.addEventListener("change", async ()=>{

//     scontainer.innerHTML = "";
//     await fetchData("http://localhost:3000/products?gender=women");
// })

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

// fetchData("http://localhost:3000/products");

// function appendData(data){
//     scontainer.innerHTML = "";
//     data.forEach((item) => {
//       let card = createCard(item);
//       scontainer.append(card);
//     })
// }