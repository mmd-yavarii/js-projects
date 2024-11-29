const URL = "./data.json";

async function fetchData() {
  const response = await fetch(URL);
  const data = await response.json();
}

export default fetchData;
