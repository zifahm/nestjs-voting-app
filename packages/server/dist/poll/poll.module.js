"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const poll_repository_1 = require("./poll.repository");
const poll_resolver_1 = require("./poll.resolver");
const poll_service_1 = require("./poll.service");
let PollModule = class PollModule {
};
PollModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([poll_repository_1.PollRepository, poll_repository_1.PollOptionRepository])],
        providers: [poll_resolver_1.PollResolver, poll_service_1.PollService],
    })
], PollModule);
exports.PollModule = PollModule;
//# sourceMappingURL=poll.module.js.map