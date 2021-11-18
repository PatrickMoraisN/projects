import Cart from './Cart';

describe('Cart', () => {
  let cart;
  beforeEach(() => {
    cart = new Cart();
  })

  it('should return 0 when getTotal() is executed in a newly created instance', () => {

    expect(cart.getTotal()).toBe(0);
  });

  it('should multiply quantity and price and receive the total amount', () => {
    const item = {
      product: {
        title: 'Nike run - men',
        price: 35388,
      },
      quantity: 3,
    };

    cart.add(item);

    expect(cart.getTotal()).toBe(106164);
  });
})
