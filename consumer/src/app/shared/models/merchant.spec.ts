import { Merchant } from './merchant';

describe('Merchant', () => {
  it('should create an instance', () => {
    expect(new Merchant(String,Number,String,String, String)).toBeTruthy();
  });
});
