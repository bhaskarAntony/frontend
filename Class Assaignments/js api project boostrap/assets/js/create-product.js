const URLS = "http://localhost:3000";

let form = document.getElementById("create-form");
let productName = document.getElementById("product-name");
let productCost = document.getElementById("product-cost");
let productDescription = document.getElementById("description");
let productMainImage = document.getElementById("main-image");
let productImage1 = document.getElementById("image1");
let productImage2 = document.getElementById("image2");
let productImage3 = document.getElementById("image3");
let productImage4 = document.getElementById("image4");
let category = document.getElementById("categories");
let dilivery = document.getElementById("dilivery-type");
let succsess =document.getElementById("created-dialog");
let closeDialog = document.getElementById("dialog-close");

closeDialog.addEventListener("click", ()=>{
    succsess.style.visibility = "hidden";
});

form.addEventListener("submit", async (e)=>{
    e.preventDefault();

    let newProduct = {
        "name": productName.value,
        "cost":productCost.value,
        "description":productDescription.value,
        "diliverytype":dilivery.value,
        "productimage":productMainImage.value,
        "productotherimages":[
            productImage1.value,
            productImage2.value,
            productImage3.value,
            productImage4.value
        ]
    }

    console.log("new product = ", newProduct);

    await fetch(`${URLS}/${category.value}`,{
        method: "POST",
        body: JSON.stringify(newProduct),
        headers:{
            "Content-Type":"application/json",
        },
    })
        .then((res)=>res.json())
        .then((out)=>{
            alert("New user created successfully");
        })
        .catch((error)=>console.log(error.message));
});

