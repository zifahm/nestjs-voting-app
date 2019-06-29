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
const core_1 = require("@nestjs/core");
const Store = require("connect-redis");
const dotenv = require("dotenv");
const session = require("express-session");
const app_module_1 = require("./app.module");
const constants_1 = require("./constants");
const redis_1 = require("./redis");
dotenv.config();
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const RedisStore = Store(session);
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.use(session({
            store: new RedisStore({
                client: redis_1.redis,
            }),
            name: 'votingapp',
            secret: constants_1.SESSION_SECRET,
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                expires: true,
                maxAge: 1000 * 60 * 60 * 24 * 365,
            },
        }));
        yield app.listen(3000);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map