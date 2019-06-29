"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const constants_1 = require("../constants");
const redis_1 = require("../redis");
exports.confirmEmailLink = (userId) => __awaiter(this, void 0, void 0, function* () {
    const id = uuid_1.v4();
    yield redis_1.redis.set(`${constants_1.CONFIRM_EMAIL_PREFIX}${id}`, userId, 'ex', 60 * 60 * 15);
    return `${process.env.BACKEND_HOST}/user/confirm/${id}`;
});
//# sourceMappingURL=confirmEmailLink.js.map