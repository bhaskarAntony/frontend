// for(let edit=0; edit<localStorage.length;edit++){
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const phone = document.getElementById("phone").value;
//     const profile = document.getElementById("profile").value;
//     if(localStorage.key(edit)=="edit^+$#"){
//     const editKey = localStorage.key(edit);
//     const mainKey = localStorage.getItem(editKey);
//     const keykey = localStorage.key(mainKey);
//     const keykeyvalue = localStorage.getItem(keykey);
//     const arry = JSON.parse(keykeyvalue);
//     name.value = arry.name;
//     console.log(arry.name);
//     email.value = arry.email;
//     phone.value = arry.phone;
//     profile.value = arry.profile;
//     }
// }
const create = document.getElementById("create");
create.onclick = function(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const profile = document.getElementById("profile").value;
    if(name!=""&&email!=""&&phone!=""&&profile!=""){
    const key = name;
    const value = {
        name:name,
        email:email,
        phone:phone,
        profile:profile
    }
    localStorage.setItem(key, JSON.stringify(value));
    document.getElementById("form").reset();
}
else{
    alert("please enter required fields")
}
}