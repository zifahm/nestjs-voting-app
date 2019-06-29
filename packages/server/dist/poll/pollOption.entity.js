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
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const poll_entity_1 = require("./poll.entity");
let PollOption = class PollOption {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PollOption.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PollOption.prototype, "text", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column('integer'),
    __metadata("design:type", Number)
], PollOption.prototype, "votes", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PollOption.prototype, "pollId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => poll_entity_1.Poll, poll => poll.pollOption, { onDelete: 'CASCADE' }),
    __metadata("design:type", Promise)
], PollOption.prototype, "poll", void 0);
PollOption = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], PollOption);
exports.PollOption = PollOption;
//# sourceMappingURL=pollOption.entity.js.map