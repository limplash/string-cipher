export const keyLengthHint = (algo: string): number => {
  switch (algo) {
    case 'aes-256-gcm': return 32;
    case 'aes-192-gcm': return 24;
    case 'aes-128-gcm': return 16;
    default: throw new Error(`Unsupported algorithm ${algo}`);
  }
};
