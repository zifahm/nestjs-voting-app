"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.GetUserId = common_1.createParamDecorator((data, [root, args, ctx, info]) => {
    return ctx.req.session.userId;
});
//# sourceMappingURL=getUserId.decorator.js.map