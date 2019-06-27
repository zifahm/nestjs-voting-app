import * as DataLoader from 'dataloader';
import { Request, Response } from 'express';
import { PollOption } from '../poll/pollOption.entity';

export interface MyContext {
  req: Request;
  res: Response;
  pollOptionLoader: DataLoader<number, PollOption[]>;
}
