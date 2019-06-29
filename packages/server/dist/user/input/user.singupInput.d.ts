import { User } from '../user.entity';
export declare class SignupInput implements Partial<User> {
    userName: string;
    email: string;
    password: string;
}
