class Products {
  constructor(parent, products, cart) {
    this.parent = parent;
    this.products = products;
    this.cart = cart;

    this.parent.addEventListener("click", this);
  }

  // event handeler for add items to cart
  handleEvent(event) {
    if (event.target.tagName == "BUTTON") {
      this.addToCart(event.target.dataset.id);
    }
  }

  // add to cart
  addToCart(id) {
    const theProduct = this.products.find((item) => item.id == id);
    this.cart.products.push(theProduct);
    this.cart.showProducts();
  }

  // create products and add on the page
  showProducts() {
    this.products.forEach((item) => {
      this.parent.innerHTML += `
        <div class="products-item"> 
          <img src="${item.image}" alt="${item.alt}" />
          <div class="product-info">
          <h3>${item.name}</h3> 
            <div>
              <span>${item.price}</span>
              <button data-id="${item.id}">+ </button>
            </div>
          </div>
        </div>
      `;
    });
  }
}

export default Products;
