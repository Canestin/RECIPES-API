import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('ingredients')
export class IngredientEntity {

    @PrimaryGeneratedColumn( {name: "ingredientId"} )
    id: number

    @Column()
    name: string

    @Column()
    aisle: string;
}    