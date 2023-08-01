const URL = 'http://localhost:3000';



const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

console.log("params id=", params.product);


let succsess =document.getElementById("created-dialog");
let closeDialog = document.getElementById("dialog-close");

closeDialog.addEventListener("click", ()=>{
    succsess.style.visibility = "hidden";
});

//read the data on page load //anonymous function
(function () {
    fetch(`${URL}/${params.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((out) => {
            console.log("users =", `${URL}/${params.id}`);
            printData(out);
        })
        .catch((err) => console.log(err.message));
})();

//print data
function printData(item) {
    let cardstext = document.getElementById("cart-container");
    cardstext.innerHTML += `
        <div class="top-cart">
        <div class="cart-image">
        <div class="main-image-container">
            <img src="${item.productimage}">
        </div>
        
    </div>
    <div class="cart-text" id="card-text">
        <form action="post" id="cart-form" autocomplete="off">
        <h1 id="name">${item.name}</h1>
        <p id="description">${item.description}</p>
        <h4 id="rating"><i class="fa fa-star"></i>2+ Rating</h4>
        <hr>
        <h2 id="cost">${item.cost}/-</h2>
        <p>Suggested Offline payments</p>
        <div class="counter">
          <i class="fa fa-minus" id="decreas"></i>
         <input type="number" id="number" value="1">
          <i class="fa fa-plus"  id="increase"></i>
        </div>
        <div class="cart-btns">
          <button type="button" id="buy">Buy Now</button>
          <button type="submit" id="cart">Add to Cart</button>
        </div>
        <div class="type">
          <h3 id="delivery"><i class="fa fa-truck"></i>${item.diliverytype}</h3>
        </div>
      </form>
      </div>
      </div>
      <div class="refernce-images">
            <div class="ref-image1-container">
                <img src="${item.productotherimages[0]}">
            </div>

            <div class="ref-image1-container">
                <img src="${item.productotherimages[1]}">
            </div>

            <div class="ref-image1-container">
                <img src="${item.productotherimages[2]}">
            </div>
            
            <div class="ref-image1-container">
                <img src="${item.productotherimages[3]}">
            </div>
        </div>`;
    document.getElementById("cart").addEventListener("click", async (e) => {
        e.preventDefault();
        const URLS = "http://localhost:3000";

            let cartProduct = {
                "name": item.name,
                "cost": item.cost*document.getElementById("number").value,
                "description": item.description,
                "diliverytype": item.diliverytype,
                "productimage": item.productimage,
                "productotherimages": [
                    item.productotherimages[0],
                    item.productotherimages[1],
                    item.productotherimages[2],
                    item.productotherimages[3]
                ],
                "count":document.getElementById("number").value,
            }

            console.log("new product = ", cartProduct);

            await fetch(`${URLS}/cart`, {
                    method: "POST",
                    body: JSON.stringify(cartProduct),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((res) => res.json())
                .then((out) => {
                    succsess.style.visibility = "visible";
                })
                .catch((error) => console.log(error.message));
        });
}