const URL = 'http://localhost:3000';
const params = new Proxy(new URLSearchParams(window.location.search),{
    get: (searchParams,prop) => searchParams.get(prop),
});

console.log("params id=",params.product);


//read the data on page load //anonymous function
(function () {
    fetch(`${URL}/${params.product}`,{
        method:"GET",
        headers: {
            "Content-Type":"application/json",
        },
    })
    .then((res) => res.json())
    .then((out) => {
        console.log("users =",`${URL}/${params.product}`);
        printData(out);
    })
    .catch((err) =>{
        let cards = document.getElementById("product-cards");
        let filters = document.getElementById("filters");
        filters.style.visibility = "hidden"
        cards.innerHTML +=`
        <div class="no-data">
        <div class="spinner-border  text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
            <h1>Oops! ${err.message}</h1>
            <a href="index.html" class="bg-primary text-white">Back To Home</a>
        </div>
        `
    });
})();

//print data
function printData(data){
    let cards = document.getElementById("product-cards");
    if(data.length==0){
        let filters = document.getElementById("filters");
        filters.style.visibility = "hidden"
        cards.innerHTML +=`
        <div class="no-data">
        <div class="spinner-border  text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
            <h1>Oops! No Related Products Here</h1>
            <a href="create-product.html">CREATE YOUR OWN PRODUCT</a>
        </div>
        `
    }
    else{
        let filters = document.getElementById("filters");
        filters.style.visibility = "visible"
    data.forEach((item) => {
        cards.innerHTML += `
        <div class="item">
        <form action="post">
        <div class="image-container">
            <img src="${item.productimage}" alt="">
            <i class="fa fa-heart-o" id="fav" title="favaraite"></i>
        </div>
        <div class="product-name-container row">
            <h4 class="col-md-6 "><a href="add-cart-page.html?id=${params.product}/${item.id}">${item.name}</a></h4>
            <h3 class="col-md-6 text-md-end text-primary">${item.cost}₹</h3>
        </div>
        <div class="description">
            <p>${item.description}<a href="add-cart-page.html?id=${params.product}/${item.id}" class="text-primary"> Read more..</a></p>
        </div>
        
        <div class="rating">
            <h4><i class="fa fa-star-half-full"></i>5+ Rating</h4>
        </div> 
        <div class="types p-1 fs-4 rounded-3 text-white bg-primary">
        <p>${item.diliverytype}</p>
        </div>
        
    </form>
    </div>
    `;
    document.getElementById("fav").addEventListener("click",async ()=>{
        let newProduct = {
            "name": item.name,
            "cost":item.cost,
            "description":item.description,
            "diliverytype":item.diliverytype,
            "productimage":item.productimage,
            "productotherimages":[
                item.productotherimages[0],
                item.productotherimages[1],
                item.productotherimages[2],
                item.productotherimages[3]
            ]
        }
    
        console.log("new product = ", newProduct);
    
        await fetch(`${URL}/favorate`,{
            method: "POST",
            body: JSON.stringify(newProduct),
            headers:{
                "Content-Type":"application/json",
            },
        })
            .then((res)=>res.json())
            .then((out)=>{
                succsess.style.visibility = "visible";
            })
            .catch((error)=>console.log(error.message));
    })
    });
}
}