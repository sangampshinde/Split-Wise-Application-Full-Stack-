import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Expense } from './expense.entity';

   @Entity()
   export class ExpenseSplit {
     @PrimaryGeneratedColumn('uuid')
     id: string;

     @ManyToOne(() => User, (user) => user.id)
     user: User;

     @ManyToOne(() => Expense, (expense) => expense.splits)
     expense: Expense;

     @Column('decimal')
     amount: number;
   }