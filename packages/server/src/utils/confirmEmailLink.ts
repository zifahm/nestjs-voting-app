import { v4 } from 'uuid';
import { CONFIRM_EMAIL_PREFIX } from '../constants';
import { redis } from '../redis';

export const confirmEmailLink = async (userId: string) => {
  const id = v4();

  await redis.set(`${CONFIRM_EMAIL_PREFIX}${id}`, userId, 'ex', 60 * 60 * 15);

  return `${process.env.BACKEND_HOST}/user/confirm/${id}`;
};
