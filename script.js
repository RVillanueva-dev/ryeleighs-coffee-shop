
/* ========================================
   RYLEIGH'S COFFEE SHOP
======================================== */

const shopName = "Ryleigh's Coffee Shop";
const currentYear = new Date().getFullYear();

let productCount = 0;

// Display the shop name
const shopNameElement = document.getElementById("shop-name");

if (shopNameElement) {
    shopNameElement.textContent = shopName;
}

// Count the products on the page
const products = document.querySelectorAll(".product-card");
productCount = products.length;

// Display the product count
const countElement = document.getElementById("product-count");

if (countElement) {
    countElement.textContent = productCount;
}

// Display the dynamic copyright
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent = `© ${currentYear} ${shopName}`;
}

// ========================================
// ACTIVITY 8.4 - MAKE YOUR SHOP DECIDE
// ========================================

// 1. Stock Status
const coffeeStock = 8;
let stockMessage;

if (coffeeStock > 10) {
    stockMessage = "In stock";
} else if (coffeeStock >= 1) {
    stockMessage = "Only a few left";
} else if (coffeeStock === 0) {
    stockMessage = "Sold out";
} else {
    stockMessage = "Stock unavailable";
}

const stockElement = document.getElementById("stock-result");

if (stockElement) {
    stockElement.textContent = stockMessage;
}

// 2. Free Delivery Check
const orderTotal = 550;
const isMember = true;
const freeDeliveryMinimum = 500;

const qualifiesForFreeDelivery =
    orderTotal >= freeDeliveryMinimum && isMember;

const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;
const finalTotal = orderTotal + deliveryFee;

const deliveryElement = document.getElementById("delivery-result");

if (deliveryElement) {
    deliveryElement.textContent =
        `Order: ₱${orderTotal} | Delivery: ₱${deliveryFee} | Final total: ₱${finalTotal}`;
}

// 3. Shop Open or Closed
const isShopOpen = true;

const shopStatus = isShopOpen ? "Open today" : "Closed today";

const shopStatusElement = document.getElementById("shop-status-result");

if (shopStatusElement) {
    shopStatusElement.textContent = shopStatus;
}

// Display results in the console
console.log("Shop name:", shopName);
console.log("Current year:", currentYear);
console.log("Products available:", productCount);
console.log("Coffee stock:", coffeeStock);
console.log("Stock status:", stockMessage);
console.log("Order total:", orderTotal);
console.log("Delivery fee:", deliveryFee);
console.log("Final total:", finalTotal);
console.log("Shop status:", shopStatus);
