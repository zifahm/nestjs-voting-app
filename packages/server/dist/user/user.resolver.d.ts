import { MyContext } from 'src/types/myContext';
import { LoginInput } from './input/user.loginInput';
import { SignupInput } from './input/user.singupInput';
import { ErrorResponse } from './shared/errorResponse';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    hello(): Promise<string>;
    signup(signupInput: SignupInput): Promise<ErrorResponse[] | null>;
    login(loginInput: LoginInput, ctx: MyContext): Promise<ErrorResponse[] | null>;
    logout(ctx: MyContext): Promise<boolean>;
}
