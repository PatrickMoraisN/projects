import { remove, find } from 'lodash';

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
    const itemToFind = { product: item.product };

    if (find(this.items, itemToFind)) {
      remove(this.items, itemToFind);
    }
    this.items.push(item);
  }

  remove(product: ProductProps) {
    const itemToFind = { product };
    remove(this.items, itemToFind);
  }

  summary() {
    const total = this.getTotal();
    const items = this.items;
  
    return {
      total,
      items,
    }
  }

  checkout() {
    const { total, items } = this.summary();

    this.items = [];
  
    return {
      total,
      items,
    }
  }
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