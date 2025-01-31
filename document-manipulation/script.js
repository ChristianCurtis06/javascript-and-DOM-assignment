// Task 1: Create an array containing information about different products, including their names, prices, and descriptions
let products = [
    {name: "Laptop", price: 999.99, description: "Powerful computing on the go"},
    {name: "Smartphone", price: 699.99, description: "Stay connected wherever you are"},
    {name: "Headphones", price: 149.99, description: "Immersive audio experience"}
];

// Task 2: Write a function to display the product information on the webpage dynamically
function displayProducts() {
    let productList = document.getElementById("productList");
    productList.innerHTML = "";

    products.forEach(function(product) {
        let listItem = document.createElement("li");
        listItem.textContent = `Name: ${product.name}, Price $${product.price}, Description: ${product.description}`;
        productList.appendChild(listItem);
    });
}

// Task 3: Implement an event listener to trigger the display of products when the page loads
window.addEventListener("load", function() {
    displayProducts();
});