import { createDecipheriv, pbkdf2Sync } from 'crypto';
import { EncryptionFunction, DecrypterOptions } from '../types';
import { keyLengthHint } from './key-length-hint';
/**
 * Create a sync decrypt  function that can be used to decrypt UTF-8 strings,
 * The return function takes cipherText and a key to generate pbkdf2Sync
 * text based on AES-GCM with IV length of 16 and uses scryptSync to
 * generate 32 byte (256 bit) Key
 * @default
 * * inputEncoding = 'base64',
 * * stringEncoding = 'utf8',
 * * authTagLength = 16,
 * * ivLength = 12,
 * * saltLength = 32,
 * * iterations = 1,
 * * digest = 'sha256'
 * @example
 * ```
 * const decrypt = makeStringDecrypterSync({});
 * const plainText = decrypt('encrypted message', 'some password');
 * ```
 * @note
 * Use same options as used with makeStringEncrypter
 */
export const makeStringDecrypterSync: (opt: DecrypterOptions) => EncryptionFunction<string> = ({
  algorithm,
  inputEncoding = 'base64',
  stringEncoding = 'utf8',
  ivLength = 12,
  authTagLength = 16,
  saltLength = 32,
  iterations = 1,
  digest = 'sha256'
}) => ((text, password) => {
  const buffer = Buffer.from(text, inputEncoding);
  // data is packed in this sequence [salt iv tag cipherTest]
  const tagStartIndex = saltLength + ivLength;
  const textStartIndex = tagStartIndex + authTagLength;
  const salt = buffer.slice(0, saltLength);
  const iv = buffer.slice(saltLength, tagStartIndex);
  const tag = buffer.slice(tagStartIndex, textStartIndex);
  const cipherText = buffer.slice(textStartIndex);
  const key = pbkdf2Sync(password, salt, iterations, keyLengthHint(algorithm), digest);
  const decipher = createDecipheriv(algorithm, key, iv, { authTagLength })
    .setAuthTag(tag);
  return `${decipher.update(cipherText, 'binary', stringEncoding)}${decipher.final(stringEncoding)}`;
});
