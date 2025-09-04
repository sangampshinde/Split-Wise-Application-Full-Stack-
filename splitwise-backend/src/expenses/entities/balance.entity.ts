import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

   @Entity()
   export class Balance {
     @PrimaryGeneratedColumn('uuid')
     id: string;

     @ManyToOne(() => User, (user) => user.balances)
     user: User;

     @ManyToOne(() => User, (user) => user.owedBalances)
     owesTo: User;

     @Column('decimal')
     amount: number;
   }