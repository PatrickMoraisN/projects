import Cart from './Cart';

describe('Cart', () => {
  let cart;
  const product = {
    title: 'Nike run - men',
    price: 35388,
  };

  const product2 = {
    title: 'Nike run - women',
    price: 65388,
  };

  beforeEach(() => {
    cart = new Cart();
  })

  it('should return 0 when getTotal() is executed in a newly created instance', () => {

    expect(cart.getTotal()).toBe(0);
  });

  it('should multiply quantity and price and receive the total amount', () => {
    const item = {
      product,
      quantity: 3,
    };

    cart.add(item);

    expect(cart.getTotal()).toBe(106164);
  });

  it('should ensure no more than one product exists at a time', () => {
    cart.add({
      product,
      quantity: 3,
    });

    cart.add({
      product,
      quantity: 1,
    });

    expect(cart.getTotal()).toBe(35388);
  });

  it('should update total amount when a product gets include and then removed', () => {
    cart.add({
      product,
      quantity: 2,
    });

    cart.add({
      product: product2,
      quantity: 1,
    });

    cart.remove(product);

    expect(cart.getTotal()).toBe(65388);
  });
})
