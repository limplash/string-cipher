import { CipherGCMTypes } from 'crypto';
import { DriveKeyOptions } from './drive-key-options';

export type EncrypterOptions = Partial<Omit<DriveKeyOptions, 'KeyLength'>> & {
  algorithm: CipherGCMTypes;
  outputEncoding?: 'base64' | 'hex';
  stringEncoding?: 'utf8' | 'ascii';
  ivLength?: number;
  authTagLength?: number;
}
