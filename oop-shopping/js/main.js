import { fetchData } from "../utils/httpReq.js";
import Products from "../models/Product.js";

const productsNode = document.querySelector("#products");

// get data and handel the app
async function render() {
  const productsData = await fetchData();
  const productsInstance = new Products(productsNode, productsData);
  productsInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);
