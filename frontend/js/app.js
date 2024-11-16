document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("http://localhost:5000/api/products");
  const products = await response.json();

  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart('${product._id}')">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });
});

function addToCart(productId) {
  
  alert("Added to cart");
}
