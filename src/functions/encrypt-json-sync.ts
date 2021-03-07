import { makeStringEncrypterSync } from './make-string-encrypter-sync';

const encrypt = makeStringEncrypterSync({ algorithm: 'aes-256-gcm' });

/**
 * A sync encrypt function that can be used to encrypt JSON objects,
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
export const encryptJsonSync = (payload: any, password: string): string => encrypt(JSON.stringify(payload), password);
