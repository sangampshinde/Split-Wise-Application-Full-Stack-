import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

   @Entity()
   export class Notification {
     @PrimaryGeneratedColumn('uuid')
     id: string;

     @ManyToOne(() => User, (user) => user.notifications)
     user: User;

     @Column()
     message: string;

     @Column()
     type: string;

     @Column({ default: false })
     read: boolean;

     @Column()
     createdAt: Date;
   }