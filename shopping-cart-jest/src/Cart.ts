
type ItemProps = {
  quantity: number;
  product: ProductProps;
}

type ProductProps = {
  title: string;
  price: number;
}

export default class Cart {
  items = [];

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.quantity * item.product.price;
    }, 0);
  }

  add(item: ItemProps) {
    this.items.push(item);
  }

  remove(product: ProductProps) {}

  summary() {}

  checkout() {}
}

const cart = new Cart();

const product = {
  title: '',
  price: 0,
};

const item = {
  quantity: 2,
  product,
};

cart.add(item);
cart.remove(product);
cart.summary();
cart.checkout();