import { CipherGCMTypes } from 'crypto';
import { DriveKeyOptions } from './drive-key-options';

export type DecrypterOptions = Partial<Omit<DriveKeyOptions, 'KeyLength'>> & {
  algorithm: CipherGCMTypes;
  inputEncoding?: 'base64' | 'hex';
  stringEncoding?: 'utf8' | 'ascii';
  ivLength?: number;
  authTagLength?: number;
}
