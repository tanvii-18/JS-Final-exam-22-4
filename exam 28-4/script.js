const searchBox =document.querySelector("#search-value");
const searchBtn = document.querySelector("#search");
const addBtn = document.querySelector("#add-recipe");
const recipes = document.querySelector(".recipes")
const deleteBtn = document.querySelector(".deleteBtn")


deleteBtn.addEventListener("click", function(){

   recipes.remove();
});
