const inputKey = document.getElementById("inputKey");
const inputValue = document.getElementById("inputValue");
const deleteBtn = document.getElementById("btnAllDelete");
document.getElementById("btnInsert").onclick=function(){
    const key =inputKey.value;
    const value =inputValue.value;
    if(key && value){
        localStorage.setItem(key, value);
        window.location.reload();
    }
    else{
        alert("please fill required fields");
    }
}
if(localStorage.length==0){
    deleteBtn.style.display = "none";
    document.getElementById("autoFill").innerHTML = "Empty Local Storage, insert Key and value to data";
    document.getElementById("autoFill2").innerHTML = "Empty Local Storage,  we can't Delete Data";
    document.getElementById("avialRecords").style.display = "none";
    document.getElementById("deletKey").style.display = "none";
    document.getElementById("deleteInfo").style.display = "none";
}
if(localStorage.length!=0){
    document.getElementById("autoFill").innerHTML = "Records available in Localstorage upadate or delete data";
}
for(let index = 0; index<localStorage.length; index++){
    const key = localStorage.key(index);
    const value = localStorage.getItem(key);
    let outputBox = document.getElementById("lsOutput");
    let output = document.createElement("div");
    let p = document.createElement("p");
    let label = document.createElement("label");
    outputBox.appendChild(output);
    output.classList.add("output");
    output.appendChild(label);
    output.appendChild(p);
    label.innerHTML=key;
    p.innerHTML = value;
}

//search value from the data
document.getElementById("btnAllDelete").onclick = function(){
    localStorage.clear();
    location.reload();
}
document.getElementById("btnReadData").onclick = function(){
    const keyName = document.getElementById("inputReadDataKey").value;
    const keyValue = localStorage.getItem(keyName);
    if(keyName||localStorage.length!=0){
    document.getElementById("readKeyName").innerHTML = keyName;
    document.getElementById("readedDataHere").innerHTML = keyValue;
    }
    if(!keyName||localStorage.length==0){
        document.getElementById("readKeyName").style.display = "none";
        alert("given key name is not in Local Storage")
    }
};

//delete single value using key name
document.getElementById("btnDeletKey").onclick = function(){
    const deleteKeyName = document.getElementById("inputDeleteKey").value;
    if(deleteKeyName){
        localStorage.removeItem(deleteKeyName);
        location.reload();
    }
    if(!deleteKeyName){
        alert("given key name is not in Local Storage")
    }
};