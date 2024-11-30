class Cart {
  constructor(parent, price) {
    this.parent = parent;
    this.price = price;
    this.products = [];
  }

  // show products on cart session
  showProducts() {
    const toShow = [...new Set(this.products)];
    this.parent.innerHTML = "";

    this.products.forEach((item) => {
      const qty = this.products.filter((i) => i.id == item.id).length;
    });
  }
}

export default Cart;
