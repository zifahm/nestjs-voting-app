import { EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { User } from '../user/user.entity';
export declare class PostSubscriber implements EntitySubscriberInterface<User> {
    listenTo(): typeof User;
    beforeInsert(event: InsertEvent<User>): Promise<void>;
}
