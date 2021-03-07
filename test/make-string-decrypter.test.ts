import {
  makeStringDecrypter,
  makeStringDecrypterSync,
  makeStringEncrypter,
  makeStringEncrypterSync
} from '../src';

describe('makeStringDecrypter', () => {
  it('can create an decryption function that decrypt messages', async () => {
    const password = '1234';
    const text = 'ABCDEFG';
    const encrypt = makeStringEncrypter({ algorithm: 'aes-256-gcm' });
    const cipherText = await encrypt(text, password);
    const decrypt = makeStringDecrypter({ algorithm: 'aes-256-gcm' });
    expect(cipherText).not.toEqual(text);
    expect(await decrypt(cipherText, password)).toEqual(text);
  });
});

describe('makeStringDecrypterSync', () => {
  it('can create an decryption function that decrypt messages', () => {
    const password = '1234';
    const text = 'ABCDEFG';
    const encrypt = makeStringEncrypterSync({ algorithm: 'aes-256-gcm' });
    const cipherText = encrypt(text, password);
    const decrypt = makeStringDecrypterSync({ algorithm: 'aes-256-gcm' });
    expect(cipherText).not.toEqual(text);
    expect(decrypt(cipherText, password)).toEqual(text);
  });
});
