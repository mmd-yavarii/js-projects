const URL = "../data.json";

async function fetchData() {
  const products = await fetch(URL);
  const result = await products.json();
  return result;
}

export { fetchData };
