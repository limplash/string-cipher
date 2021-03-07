import {
  BinaryLike, pbkdf2 as cryptoPbkdf2
} from 'crypto';

export const pbkdf2 = (password: BinaryLike, salt: BinaryLike, iterations: number, keyLength: number, digest: string): Promise<Buffer> => new Promise((resolve, reject) => {
  cryptoPbkdf2(password, salt, iterations, keyLength, digest, (error, buffer) => {
    if (error) reject(error);
    else resolve(buffer);
  });
});
