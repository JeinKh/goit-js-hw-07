const categoriesList = document.querySelector("#categories");
const categories = categoriesList.querySelectorAll("li.item");
console.log(`Number of: ${categories.length}`);
categories.forEach(category => {
    const categoryTitle = category.querySelector("h2").textContent;
    const items = category.querySelectorAll("ul > li");
    console.log(`Category: ${categoryTitle}, Elements: ${items.length}`);
});