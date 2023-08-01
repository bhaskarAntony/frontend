let navigation = document.getElementById("nav");
let click = false;
function sathish(x){
    if(click ==false){
        x.classList.toggle("fa-xmark");
        navigation.style.display = "block";
        click = true;
    }
    else{
        x.classList.toggle("fa-bars");
        navigation.style.display = "none";
        click = false;
    }
    
}