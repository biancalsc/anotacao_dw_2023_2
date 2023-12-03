import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"colors"})
export class Color {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:7})
    background: string;

    @Column({length:7})
    color: string;

    @Column({nullable: false, type:"integer", default: 0})
    count: number;
}