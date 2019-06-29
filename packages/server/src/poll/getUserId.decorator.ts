import { createParamDecorator } from '@nestjs/common';

export const GetUserId = createParamDecorator(
  (data, [root, args, ctx, info]) => {
    return ctx.req.session.userId;
  },
);
