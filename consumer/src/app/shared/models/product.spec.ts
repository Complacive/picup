import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(Number, String, String, Number, String, 
      Number, Number, String, Number, Number, Number)).toBeTruthy();
  });
});
