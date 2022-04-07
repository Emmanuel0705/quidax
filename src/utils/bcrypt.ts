import { BCRYPT_SALT } from '@constants/app';
import { hash, compare } from 'bcryptjs';

export const encrypt = async (pin: string): Promise<string> => {
  return await hash(pin, BCRYPT_SALT);
};

export const verify = async (pin: string, encrypted: string) => {
  return await compare(pin, encrypted);
};
