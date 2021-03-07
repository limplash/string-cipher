import { makeStringEncrypterSync } from './make-string-encrypter-sync';

/**
 * A sync encrypt function that can be used to encrypt UTF-8 strings,
 * This function returns plainText by using a user supplied password
 * @note
 * * outputEncoding = 'base64',
 * * stringEncoding = 'utf8',
 * * authTagLength = 16,
 * * ivLength = 12,
 * * saltLength = 32,
 * * iterations = 1,
 * * digest = 'sha256'
 * @example
 * ```
 * const cipherText = encrypt('some text', 'some password');
 * ```
 * @remark
 * Out put string is concatinates salt,iv,authTags and encryptedtext
 * in this precise order as no delimiters are used decrption function
 * should be created with same salt iv and auth tags length
 */
export const encryptStringSync = makeStringEncrypterSync({ algorithm: 'aes-256-gcm' });
