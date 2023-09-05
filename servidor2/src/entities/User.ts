import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:"users"})
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:50, unique:true})
    mail:string;

    @Column({length:100})
    password:string;
}