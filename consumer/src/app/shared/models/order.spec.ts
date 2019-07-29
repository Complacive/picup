import { Order } from './order';

describe('Order', () => {
  it('should create an instance', () => {
    expect(new Order(Number, Boolean, String, String, Number, Number, String, Number)).toBeTruthy();
  });
});
