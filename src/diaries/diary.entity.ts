import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Diary {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    entry: string;

    @Column()
    date_created: Date;

    @Column()
    tags: string;


}