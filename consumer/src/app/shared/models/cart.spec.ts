import { Cart } from './cart';

describe('Cart', () => {
  it('should create an instance', () => {
    expect(new Cart(Number, String, Number, Number)).toBeTruthy();
  });
});
