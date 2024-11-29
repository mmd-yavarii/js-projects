import fetchData from "../utils/httpReq.js";
import Product from "../models/Product.js";
import Cart from "../models/Cart.js";

async function render() {
  const data = await fetchData();
}

window.addEventListener("load", render);
