import Cart from "../models/Cart.js";
import Products from "../models/Products.js";
import { fetchData } from "../utils/httpRequest.js";

const productsNode = document.querySelector("#products");
const cartLisrNode = document.querySelector("#cart-list");
const totalPriceNode = document.querySelector("#total-price span");

// handel app
async function render() {
  const productsData = await fetchData();

  const cartInstance = new Cart(cartLisrNode, totalPriceNode);

  const productInstance = new Products(
    productsNode,
    productsData,
    cartInstance
  );
  productInstance.showProducts();
}

window.addEventListener("DOMContentLoaded", render);
