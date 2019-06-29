import { User } from '../user.entity';
export declare class LoginInput implements Partial<User> {
    email: string;
    password: string;
}
