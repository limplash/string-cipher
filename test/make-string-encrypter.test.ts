import { makeStringEncrypter, makeStringEncrypterSync } from '../src';

describe('makeStringEncrypter', () => {
  it('can create encryption function that encrypts a UTF-8 string', async () => {
    const encrypt = makeStringEncrypter({ algorithm: 'aes-256-gcm' });
    expect((await encrypt('01234', 'secret')).length).toEqual(88);
  });
});

describe('makeStringEncrypterSync', () => {
  it('can create encryption function that encrypts a UTF-8 string', () => {
    const encrypt = makeStringEncrypterSync({ algorithm: 'aes-256-gcm' });
    expect((encrypt('01234', 'secret')).length).toEqual(88);
  });
});
