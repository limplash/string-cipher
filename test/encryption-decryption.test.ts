import {
  decryptJson,
  decryptJsonSync,
  decryptString,
  decryptStringSync,
  encryptString,
  encryptStringSync,
  encryptJson,
  encryptJsonSync
} from '../src';

const password = '1234';

describe('encryptString/decryptString', () => {
  it('can encrypt/decrypt an UTF-8 string', async () => {
    const text = 'ABCDEFG';
    const cipherText = await encryptString(text, password);
    expect(cipherText).not.toEqual(text);
    expect(await decryptString(cipherText, password)).toStrictEqual(text);
  });
});

describe('encryptStringSync/decryptStringSync', () => {
  it('can encrypt/decrypt an UTF-8 string', () => {
    const text = 'ABCDEFG';
    const cipherText = encryptStringSync(text, password);
    expect(cipherText).not.toEqual(text);
    expect(decryptStringSync(cipherText, password)).toStrictEqual(text);
  });
});

describe('encryptJson/decryptJson', () => {
  it('can encrypt/decrypt a JSON object async', async () => {
    const json = { field: 'value' };
    const cipherJson = await encryptJson(json, password);
    expect(cipherJson).not.toEqual(json);
    expect(await decryptJson(cipherJson, password)).toStrictEqual(json);
  });
});

describe('encryptJsonSync/decryptJsonSync', () => {
  it('can encrypt/decrypt a JSON object sync', () => {
    const json = { field: 'value' };
    const cipherJson = encryptJsonSync(json, password);
    expect(cipherJson).not.toEqual(json);
    expect(decryptJsonSync(cipherJson, password)).toStrictEqual(json);
  });
});
