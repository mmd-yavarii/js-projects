import fetchData from "../utils/httpReq.js";
import Product from "../models/Product.js";
import Cart from "../models/Cart.js";

const colors = ["#ffe9ed", "#eae9ff", "#e0ffe8", "#f6ffd4", "#ffe9d4"];

async function render() {
  const data = await fetchData();
}

window.addEventListener("load", render);
