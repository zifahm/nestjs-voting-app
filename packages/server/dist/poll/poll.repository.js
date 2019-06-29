"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const poll_entity_1 = require("./poll.entity");
const pollOption_entity_1 = require("./pollOption.entity");
let PollRepository = class PollRepository extends typeorm_1.Repository {
};
PollRepository = __decorate([
    typeorm_1.EntityRepository(poll_entity_1.Poll)
], PollRepository);
exports.PollRepository = PollRepository;
let PollOptionRepository = class PollOptionRepository extends typeorm_1.Repository {
};
PollOptionRepository = __decorate([
    typeorm_1.EntityRepository(pollOption_entity_1.PollOption)
], PollOptionRepository);
exports.PollOptionRepository = PollOptionRepository;
//# sourceMappingURL=poll.repository.js.map