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

  describe('getTotal()', () => {
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
  
  describe('checkout()', () => {
    it('should returnan object with the total and the list of items', () => {
      cart.add({
        product,
        quantity: 3,
      });

      cart.add({
        product: product2,
        quantity: 1,
      });

      expect(cart.checkout()).toMatchSnapshot();
    });

    it('should reset the cart when checkout() is called', () => {
      cart.add({
        product: product2,
        quantity: 2,
      });

      cart.checkout()

      expect(cart.getTotal()).toBe(0);
    });
  });

  describe('summary()', () => {
    it('should return an object when summary() is called', () => {
      cart.add({
        product,
        quantity: 3,
      });

      cart.add({
        product: product2,
        quantity: 1,
      });

      expect(cart.summary()).toMatchSnapshot();
    });

    it('should return the total', () => {
      cart.add({
        product,
        quantity: 3,
      });

      cart.add({
        product: product2,
        quantity: 1,
      });

      cart.summary();

      expect(cart.getTotal()).not.toBe(0);
    });
  })
  
  describe('special conditions', () => {
    it('should apply percentage discount when quantity above minimum is passed', () => {
      const condition = {
        percentage: 30,
        minimum: 2,
      };

      cart.add({
        product,
        condition,
        quantity: 3,
      });

      expect(cart.getTotal()).toBe(74315)
    });

    it('should apply percentage discount for even quantities', () => {
      const condition = {
        quantity: 2,
      };

      cart.add({
        product,
        condition,
        quantity: 4,
      });

      expect(cart.getTotal()).toBe(70776)
    })
  })
  
})
