export type DriveKeyOptions = {
  keyLength: number;
  saltLength?: number;
  iterations?: number;
  digest?: 'sha256' | 'sha512';
}
