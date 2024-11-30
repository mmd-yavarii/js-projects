class Display {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;

    this.parent.addEventListener("click", this);
  }

  // show products on the page
  showProducts() {
    const toShow = [...new Set(this.products)];
    let qty = 1;
    this.parent.innerHTML = "";

    toShow.forEach((item) => {
      qty = this.products.filter((i) => i.id == item.id).length;
      this.parent.innerHTML += `
            <div>
                <img src="${item.image}" alt="${item.alt}" />
                <div class="cart-info">
                    <h4>${item.name}</h4>
                    <p>${item.price}$</p>
                </div>
                <div class="cart-controll">
                    <div>
                        <button data-id="${item.id}">-</button>
                        <span>${qty}</span>
                        <button data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-ele" data-id="${item.id}">remove</button>
                </div>
            </div>
          `;
      this.showTotallPrice();
    });
  }
}

export default Display;
