import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Expense } from '../../expenses/entities/expense.entity';
import { Group } from '../../groups/entities/group.entity';
import { Notification } from '../../notifications/entities/notification.entity';
import { Balance } from '../../expenses/entities/balance.entity';

Entity();
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @OneToMany(() => Expense, (expense) => expense.paidBy)
  expensesPaid: Expense[];
  @OneToMany(() => Notification, (notification) => notification.user)
  notifications: Notification[];

  @OneToMany(() => Balance, (balance) => balance.user)
  balances: Balance[];

  @OneToMany(() => Balance, (balance) => balance.owesTo)
  owedBalances: Balance[];

  @ManyToMany(() => Group, (group) => group.members)
  @JoinTable()
  groups: Group[];
}
