
/* ========================================
   RYLEIGH'S COFFEE SHOP
   Activity 8.2 - Add JavaScript to Your Shop
======================================== */

// 1. Declare constants
const shopName = "Ryleigh's Coffee Shop";
const currentYear = new Date().getFullYear();

// 2. Declare a variable for the running total
let runningTotal = 0;

// 3. Display the shop name
const shopNameElement = document.getElementById("shop-name");

if (shopNameElement) {
    shopNameElement.textContent = shopName;
}

// 4. Update the copyright year
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent =
        `© ${currentYear} ${shopName}`;
}

// 5. Calculate and display the number of products
const productCards = document.querySelectorAll(".product-card");
const productCount = productCards.length;
const productCountElement = document.getElementById("product-count");

if (productCountElement) {
    productCountElement.textContent = productCount;
}

// 6. Display labeled information in the console
console.log("Shop Name:", shopName);
console.log("Current Year:", currentYear);
console.log("Running Total:", runningTotal);
console.log("Number of Products:", productCount);
