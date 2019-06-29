"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const constants_1 = require("../constants");
const redis_1 = require("../redis");
const poll_repository_1 = require("./poll.repository");
let PollService = class PollService {
    constructor(pollRepo, pollOptionRepo) {
        this.pollRepo = pollRepo;
        this.pollOptionRepo = pollOptionRepo;
    }
    createPoll(userId, name, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const poll = yield this.pollRepo.insert({
                name,
                userId,
            });
            options.map((text) => __awaiter(this, void 0, void 0, function* () {
                yield this.pollOptionRepo.insert({
                    text,
                    votes: 0,
                    pollId: poll.raw[0].id,
                });
            }));
            return true;
        });
    }
    vote(ctx, pollOptionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const pollOption = yield this.pollOptionRepo.findOne({
                where: { id: pollOptionId },
            });
            const ip = ctx.req.header('x-forwarded-for') || ctx.req.connection.remoteAddress;
            if (ip) {
                const hasIp = yield redis_1.redis.sismember(`${constants_1.POLL_OPTION_ID_PREFIX}${pollOption.pollId}`, ip);
                if (hasIp) {
                    return false;
                }
            }
            yield this.pollOptionRepo.update({ id: pollOptionId }, { votes: pollOption.votes + 1 });
            yield redis_1.redis.sadd(`${constants_1.POLL_OPTION_ID_PREFIX}${pollOption.pollId}`, ip);
            return true;
        });
    }
    poll(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pollRepo.findOne({
                where: { id },
                relations: ['pollOption'],
            });
        });
    }
    allPolls(take, skip) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.pollRepo
                .createQueryBuilder('poll')
                .innerJoinAndSelect('poll.pollOption', 'pollOption')
                .orderBy('poll.name', 'ASC')
                .take(take)
                .skip(skip)
                .getMany();
        });
    }
    deletePoll(ctx, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.pollRepo.delete({ id });
                const ip = ctx.req.header('x-forwarded-for') || ctx.req.connection.remoteAddress;
                yield redis_1.redis.srem(`${constants_1.POLL_OPTION_ID_PREFIX}${id}`, ip);
            }
            catch (err) {
                return false;
            }
            return true;
        });
    }
    myPoll(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pollRepo.find({ where: { userId } });
        });
    }
};
PollService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(poll_repository_1.PollRepository)),
    __param(1, typeorm_1.InjectRepository(poll_repository_1.PollOptionRepository)),
    __metadata("design:paramtypes", [poll_repository_1.PollRepository,
        poll_repository_1.PollOptionRepository])
], PollService);
exports.PollService = PollService;
//# sourceMappingURL=poll.service.js.map