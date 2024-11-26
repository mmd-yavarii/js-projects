class Products {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
    this.parent.addEventListener("click", this);
  }

  showProducts() {
    this.products.forEach((item) => this.createCard(item));
  }

  createCard(data) {
    const { name, image, alt, price, id } = data;
    this.parent.innerHTML += `
        <div>
            <img src="${image}" alt="${alt}">
            <div id="product-info">
                <h3>${name}</h3>
                <div>
                    <span>${price}</span>
                    <button data-id="${id}">+</button>
                </div>
            </div>
        </div>
    `;
  }

  handleEvent(event) {
    if (event.target.tagName == "BUTTON") {
      this.addToCart(event.target.dataset.id);
    }
  }

  addToCart(id) {
    console.log(id);
  }
}

export default Products;
