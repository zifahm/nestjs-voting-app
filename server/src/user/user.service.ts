import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignupInput } from './input/user.singupInput';
import { ErrorResponse } from './shared/errorResponse';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepo: UserRepository,
  ) {}

  async signup(signupInput: SignupInput): Promise<ErrorResponse[] | null> {
    const userExit = await this.userRepo.findOne({
      where: { email: signupInput.email },
    });
    console.log(userExit, 'userExist');

    if (userExit) {
      return [
        {
          path: 'email',
          message: 'invalid email or password',
        },
      ];
    }

    await this.userRepo.save({ ...signupInput });
    return null;
  }
}
