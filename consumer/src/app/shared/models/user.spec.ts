import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    //expect(new User(Number, String, String, String, String, String, String, Boolean, Array(), Array())).toBeTruthy();
    expect(new User()).toBeTruthy();
  });
});
