import { Checkout } from './checkout';

describe('Checkout', () => {
  it('should create an instance', () => {
    expect(new Checkout(Number, Number, Number, Number, Boolean)).toBeTruthy();
  });
});
