import { Request, Response } from 'express';
import { MyContext } from '../types/myContext';
import { LoginInput } from './input/user.loginInput';
import { SignupInput } from './input/user.singupInput';
import { ErrorResponse } from './shared/errorResponse';
import { UserRepository } from './user.repository';
export declare class UserService {
    private readonly userRepo;
    constructor(userRepo: UserRepository);
    signup(signupInput: SignupInput): Promise<ErrorResponse[] | null>;
    confirmEmail(id: string, res: Response): Promise<void>;
    login(loginInput: LoginInput, req: Request): Promise<ErrorResponse[] | null>;
    logout(ctx: MyContext): Promise<boolean>;
}
