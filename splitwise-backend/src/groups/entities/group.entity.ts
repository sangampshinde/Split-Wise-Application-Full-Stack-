import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Expense } from '../../expenses/entities/expense.entity';

@Entity()
export class Group {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @ManyToOne(() => User, (user) => user.id)
    createdBy!: User;

    @ManyToMany(() => User, (user) => user.groups)
    members!: User[];

    @OneToMany(() => Expense, (expense) => expense.group)
    expenses!: Expense[];

}
