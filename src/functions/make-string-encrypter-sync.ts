import { createCipheriv, randomBytes, pbkdf2Sync } from 'crypto';
import { EncryptionFunction, EncrypterOptions } from '../types';
import { keyLengthHint } from './key-length-hint';

/**
 * Create a sync encrypt function that can be used to encrypt UTF-8 strings,
 * The return function takes plainText and a key to generate encrypted
 * text based on AES-GCM with IV length of 16 and uses pbkdf2 for
 * generating 32 byte (256 bit) Key both SALT and IV are generated using
 * crypto.randomBytes
 * @default
 * * outputEncoding = 'base64',
 * * stringEncoding = 'utf8',
 * * authTagLength = 16,
 * * ivLength = 12,
 * * saltLength = 32,
 * * iterations = 1,
 * * digest = 'sha256'
 * @example
 * ```
 * const encrypt = makeStringEncrypter({});
 * const cipherText = encrypt('some text', 'some password');
 * ```
 * @note
 * Out put string is concatinates salt,iv,authTags and encryptedtext
 * in this precise order as no delimiters are used decrption function
 * should be created with same salt iv and auth tags length
 */
export const makeStringEncrypterSync: (opt: EncrypterOptions) => EncryptionFunction<string> = ({
  algorithm,
  outputEncoding = 'base64',
  stringEncoding = 'utf8',
  authTagLength = 16,
  ivLength = 12,
  saltLength = 32,
  iterations = 1,
  digest = 'sha256'
}) => ((text, password) => {
  const iv = randomBytes(ivLength);
  const salt = randomBytes(saltLength);
  const key = pbkdf2Sync(password, salt, iterations, keyLengthHint(algorithm), digest);
  const cipher = createCipheriv(algorithm, key, iv, { authTagLength });
  const cipherText = Buffer.concat([cipher.update(text, stringEncoding), cipher.final()]);
  return Buffer.concat([salt, iv, cipher.getAuthTag(), cipherText]).toString(outputEncoding);
});
