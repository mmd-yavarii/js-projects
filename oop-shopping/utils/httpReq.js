const URL = "../data.json";

async function fetchData() {
  const response = await fetch(URL);
  const result = await response.json();
  return result;
}

export { fetchData };
