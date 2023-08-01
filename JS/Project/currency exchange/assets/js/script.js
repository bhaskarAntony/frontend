let ammount1 = document.getElementById("currency1");
let ammount2 = document.getElementById("currency2");
let send_currency = document.getElementById("my_currency_text");
let get_currency = document.getElementById("get_currency");
let form_select = document.getElementById("from_currency");
let to_select = document.getElementById("to_currency");
let swap = document.getElementById("swap");
let info = document.getElementById("info");

function Exchange(){
    const currency1 = form_select.value;
    const currency2 = to_select.value;
    console.log(currency1);
    fetch("https://open.exchangerate-api.com/v6/latest")
    .then((pending)=> pending.json())
    .then((data)=>{
        console.log(data);
        const rate = data.rates[currency2] / data.rates[currency1];
        info.innerHTML = `1 ${currency1} = ${rate} ${currency2}`;
        send_currency.innerHTML = ammount1.value + currency1;
        get_currency.innerHTML = (ammount1.value * rate).toFixed(2) + currency2;
        ammount2.value = (ammount1.value * rate).toFixed(2);
    })
    .catch((error)=>{
        console.log(error.message);
    });
}
Exchange();
ammount1.addEventListener("onkeyup", ()=>{
    Exchange();
});
swap.addEventListener("click", ()=>{
    let temp = ammount2;
    ammount2 = ammount1;
    ammount1 = temp;
})