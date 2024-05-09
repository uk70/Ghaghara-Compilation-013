// // // let URL = "http://localhost:3000/products?gender=women";
// // // let a = document.getElementById("diveWomen");

// // // a.addEventListener("click", ()=>{
// // //   window.location.href = "product.html";
// // // })


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
//   }


//   fetch("http://localhost:3000/products")
//   .then(response => response.json())
//   .then(data => createCards(data))
//   .catch(error => console.error('Error fetching data:', error));
  
