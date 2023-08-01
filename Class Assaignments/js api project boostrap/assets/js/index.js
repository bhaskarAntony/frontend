let icons = document.querySelectorAll(".category-icons");
let list = document.getElementById("list");
let grid = document.getElementById("grid");

list.addEventListener("click", ()=>{
    let categoryRow1 = document.getElementById("category-row1");
    let categoryRow2 = document.getElementById("category-row2");
    let categoryRow3 = document.getElementById("category-row3");
    categoryRow1.style.flexDirection = "column";
    categoryRow2.style.flexDirection = "column";
    categoryRow3.style.flexDirection = "column";
    list.style.background = "#0332a9";
    list.style.color = "#fff";
    grid.style.background = "#dedddd";
    grid.style.color = "#0332a9";

});
grid.addEventListener("click", ()=>{
    let categoryRow1 = document.getElementById("category-row1");
    let categoryRow2 = document.getElementById("category-row2");
    let categoryRow3 = document.getElementById("category-row3");
    categoryRow1.style.flexDirection = "row";
    categoryRow2.style.flexDirection = "row";
    categoryRow3.style.flexDirection = "row";
    list.style.background = "#dedddd";
    list.style.color = "#0332a9";
    grid.style.background = "#0332a9";
    grid.style.color = "#fff";

});