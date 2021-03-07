import { makeStringDecrypter } from './make-string-decrypter';

const decrypt = makeStringDecrypter({ algorithm: 'aes-256-gcm' });

/**
 * An async decrypt function that can be used to decrypt JSON object,
 * This function returns plainText by using a user supplied password
 * @note
 * * inputEncoding = 'base64',
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
 * input string should be concatinated as salt,iv,authTags and encryptedtext
 * in this precise order as no delimiters are used decrption function
 * should be created with same salt iv and auth tags length
 */
export const decryptJson = async (payload: string, password: string): Promise<any> => JSON.parse(await decrypt(payload, password));
