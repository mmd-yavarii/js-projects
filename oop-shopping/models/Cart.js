import Display from "./Display.js";

class Cart extends Display {
  constructor(parent, price) {
    super(parent);
    this.price = price;
    this.products = [];
    this.parent.addEventListener("click", this);
  }

  // handel events
  handleEvent(event) {
    const tagName = event.target.tagName;
    const id = event.target.dataset.id;
    const type = event.target.innerText;
    if (tagName != "BUTTON") return;

    switch (type) {
      case "+":
        this.increase(id);
        break;
      case "-":
        this.decrease(id);
        break;
      case "remove":
        this.remove(id);
        break;
    }
  }
  // events
  increase(id) {
    const product = this.products.find((i) => i.id == +id);
    this.products.push(product);
    this.showProducts();
  }
  decrease(id) {
    const index = this.products.findIndex((i) => i.id === id);
    this.products.splice(index, 1);
    this.showProducts();
    this.showTotallPrice();
  }
  remove(id) {
    const newProducts = this.products.filter((i) => i.id != id);
    this.products = newProducts;
    this.showProducts();
    this.showTotallPrice();
  }

  // totall price
  showTotallPrice() {
    const sum = this.products.reduce((acc, item) => acc + item.price, 0);
    this.price.innerText = sum + "$";
  }
}

export default Cart;
