const URL = 'http://localhost:3000';



const params = new Proxy(new URLSearchParams(window.location.search),{
    get: (searchParams,prop) => searchParams.get(prop),
});

console.log("params id=",params.product);

let succsess =document.getElementById("created-dialog");
let closeDialog = document.getElementById("dialog-close");

closeDialog.addEventListener("click", ()=>{
    succsess.style.visibility = "hidden";
    window.location.reload();
});

let product_name=params.product;
let product = [
    {
        username:"John",
        email:"john@gmail.com",
        id:1
    },
    {
        username:"raju",
        email:"raju@gmail.com",
        id:2
    }
];


//read the data on page load //anonymous function
(function () {
    fetch(`${URL}/cart`,{
        method:"GET",
        headers: {
            "Content-Type":"application/json",
        },
    })
    .then((res) => res.json())
    .then((out) => {
        console.log("users =",`${URL}/cart`);
        printData(out);
    })
    .catch((err) => console.log(err.message));
})();

//print data
function printData(data){
    let cards = document.getElementById("cart-table");
    let container = document.getElementById("container");
    if(data.length==0){
        cards.style.visibility = "hidden"
        container.innerHTML +=`
        <div class="no-data">
        <i class='fa fa-spinner'></i>
            <h1>Your cart is Empty</h1>
            <a href="index.html">Add products</a>
        </div>
        `
    }
    else{
    data.forEach((item) => {
        cards.style.visibility = "visible";
        container.style.visibility = "hidden";
        cards.innerHTML += `
        <tr>
        <td id="idn">${item.id}</td>
        <td><img src="${item.productimage}"></td>
        <td>${item.name}</td>
        <td>${item.cost}/-</td>
        <td>${item.count}</td>
        <td><button id="delete" onclick="deleteCart()"><i class="fa fa-remove"></i> Remove</button></td>
    </tr>
    `;
    });
}
}



//Delete the record
function deleteCart(){
    let ids = document.getElementById("idn").innerHTML;
        fetch(`${URL}/cart/${ids}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
            },
        })
        .then((out) => out.json())
        .then((res) => {
            let text = document.getElementById("d-text");
            text.innerHTML = "Deleted cart Succsessfully"
            closeDialog.style.backgroundColor = "red";
            succsess.style.visibility = "visible";
        })
        .catch((err) => console.log(err.message));
    }