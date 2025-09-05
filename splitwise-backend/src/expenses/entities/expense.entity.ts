import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Group } from '../../groups/entities/group.entity';
import { ExpenseSplit } from './expense-split.entity'

 @Entity()
   export class Expense {
     @PrimaryGeneratedColumn('uuid')
     id!: string;

     @Column()
     description!: string;

     @Column('decimal')
     amount!: number;

     @ManyToOne(() => User, (user) => user.expensesPaid)
     paidBy!: User;

     @ManyToOne(() => Group, (group) => group.expenses)
     group!: Group;

     @OneToMany(() => ExpenseSplit, (split) => split.expense)
     splits!: ExpenseSplit[];

     @Column()
     createdAt!: Date;
   }