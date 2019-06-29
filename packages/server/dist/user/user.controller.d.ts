import { Response as Res } from 'express';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    confirmEmail(id: string, res: Res): Promise<void>;
}
