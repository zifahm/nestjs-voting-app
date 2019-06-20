import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userNme: string;

  @Column()
  email: string;

  @Column()
  password: number;
}
