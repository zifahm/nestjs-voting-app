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
const user_entity_1 = require("../user/user.entity");
const pollOption_entity_1 = require("./pollOption.entity");
let Poll = class Poll {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Poll.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Poll.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Poll.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User, user => user.poll),
    __metadata("design:type", Promise)
], Poll.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(() => [pollOption_entity_1.PollOption]),
    typeorm_1.OneToMany(() => pollOption_entity_1.PollOption, pollOption => pollOption.poll),
    __metadata("design:type", Promise)
], Poll.prototype, "pollOption", void 0);
Poll = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Poll);
exports.Poll = Poll;
//# sourceMappingURL=poll.entity.js.map