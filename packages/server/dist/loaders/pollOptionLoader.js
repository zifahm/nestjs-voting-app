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
const Dataloader = require("dataloader");
const typeorm_1 = require("typeorm");
const poll_entity_1 = require("../poll/poll.entity");
exports.pollOptionLoader = () => new Dataloader((keys) => __awaiter(this, void 0, void 0, function* () {
    const poll = yield typeorm_1.getRepository(poll_entity_1.Poll)
        .createQueryBuilder('poll')
        .leftJoinAndSelect('poll.pollOption', 'pollOption')
        .where('poll.id IN (:...keys)', { keys })
        .getMany();
    return poll.map(poll => poll.pollOption);
}));
//# sourceMappingURL=pollOptionLoader.js.map