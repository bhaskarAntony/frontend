if(localStorage.length!=0){
    for(let i=0; i<localStorage.length;i++){
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        let array = JSON.parse(value);
        console.log(array.name);
        let container = document.getElementById("contacts");
        let card = document.createElement("div");
        card.classList.add("contact_card");
        container.appendChild(card);
        let image = document.createElement("img");
        card.appendChild(image);
        let name_label = document.createElement("h3");
        name_label.setAttribute("id", "name");
        card.appendChild(name_label);
        let email = document.createElement("p");
        card.appendChild(email);
        let phone = document.createElement("h4");
        card.appendChild(phone);
        let social = document.createElement("div");
        social.classList.add("social");
        card.appendChild(social);
        let edit = document.createElement("i");
        edit.classList.add("material-icons", "edit");
        edit.setAttribute("onclick", "edit(this)");
        edit.setAttribute("data-status", key);
        edit.innerHTML = "&#xe254;";
        let dele = document.createElement("i");
        dele.classList.add("material-icons", "delete");
        dele.setAttribute("data", key);
        dele.setAttribute("onclick", "remover(this)");
        dele.setAttribute("id", "del");
        dele.innerHTML = "&#xe872;";
        social.appendChild(edit);
        social.appendChild(dele);
        image.src=array.profile;
        name_label.innerHTML = array.name;
        emailcompress= array.email;
        
        if(email.length>10){
            let stress="";
            for(let i=0;i<=10;i++){
                stress += email.charAt(i);              
                  if(i==10){
                    console.log(stress,"...");
                      email.innerHTML = stress+"...";
                }
            }
        }
        else{
            email.innerHTML=array.email;
        }
        phone.innerHTML = array.phone;
    }
}
//  function edit(key){
//     let key = x.getElementsByTagName("h3");
//     findrows=key.getElementsByTagName("h3");
//     const y = key.getAttribute("data-status");
//     console.log(y);
//     localStorage.setItem("edit^+$#", y);
//     window.location.href="create.html";
// }
function remover(data){
    const keyname = data.getAttribute("data");
    localStorage.removeItem(keyname);
    location.reload();
}