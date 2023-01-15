import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "src/users/user.entity";
@Entity()
export class Diary {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    entry: string;

    @Column()
    date_created: string;

    @Column()
    tags: string;

    @ManyToOne(() => User, (user)=> user.diaries)
    user: User;


}