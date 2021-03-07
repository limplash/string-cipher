import { keyLengthHint } from '../src';

describe('getKeyLengthHint', () => {
  it('can get correct hint', () => {
    expect(keyLengthHint('aes-256-gcm')).toBeDefined();
    expect(keyLengthHint('aes-192-gcm')).toBeDefined();
    expect(keyLengthHint('aes-128-gcm')).toBeDefined();
  });
  it('will throw error for unspported algorithms', () => {
    expect(() => keyLengthHint('wrong-algo')).toThrowError(new Error('Unsupported algorithm wrong-algo'));
  });
});
