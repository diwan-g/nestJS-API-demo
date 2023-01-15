import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from  'typeorm';
import { AfterInsert, AfterRemove, AfterUpdate } from 'typeorm';
import { Diary } from 'src/diaries/diary.entity';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Diary, (diary)=> diary.user)
    diaries: Diary[];

    @AfterInsert()
    logInsert() {
        console.log('Inserted User with id', this.id);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Updated User with id', this.id);
    }

    @AfterRemove()
    logRemove() {
        console.log('Removed User with id', this.id);
    }
}