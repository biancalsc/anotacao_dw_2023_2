/* 4 -
Aqui é onde nos definimos a coluna de cada tipo de tabela, seus tipos e propriedades da mesma
Nesse exemplo você precisa entender que a tabela Color tem:
- id: do tipo number, é uma coluna gerada automaticamente para identificação
- background: do tipo string, com no máximo 7 dígitos (8 se você não for um computador e contar a partir de 0)
- color: do tipo string, igual a anterior
- count: do tipo number, as propriedades dele são que ele não pode estar vazio e por padrão o valor dele é 0

Garanta que você entende o que tem em cada coluna e como ela funciona, daqui pode seguir para:
../controllers/ColorController.ts
*/


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