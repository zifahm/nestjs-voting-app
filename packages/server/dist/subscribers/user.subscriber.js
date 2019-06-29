"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const bcrypt = require("bcryptjs");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
let PostSubscriber = class PostSubscriber {
    listenTo() {
        return user_entity_1.User;
    }
    beforeInsert(event) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`BEFORE POST INSERTED: `, event.entity);
            event.entity.password = yield bcrypt.hash(event.entity.password, 12);
        });
    }
};
PostSubscriber = __decorate([
    typeorm_1.EventSubscriber()
], PostSubscriber);
exports.PostSubscriber = PostSubscriber;
//# sourceMappingURL=user.subscriber.js.map