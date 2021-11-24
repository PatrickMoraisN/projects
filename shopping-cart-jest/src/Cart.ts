import { remove, find } from 'lodash';
import Dinero from 'dinero.js';

const Money = Dinero;

Money.defaultCurrency = 'BRL';
Money.defaultPrecision = 2;

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
      const amount = Money({ amount: item.quantity * item.product.price});
      let discount = Money({ amount: 0 });

      if (item.condition && item.quantity > item.condition.minimum) {
        discount = amount.percentage(item.condition.percentage);
      }

      return acc.add(amount).subtract(discount);
    }, Money({ amount: 0 })).getAmount();
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