import { Injectable } from '@nestjs/common';

@Injectable()
export class PollService {
  async createPoll(
    userId: string,
    name: string,
    options: string[],
  ): Promise<Boolean> {
    return true;
  }
}
