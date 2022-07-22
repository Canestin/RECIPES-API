import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";

@Entity('recipes')
export class RecipeEntity {

    @PrimaryGeneratedColumn( {name: "recipeId"} )
    id: number

    @Column()
    name: string

    @Column()
    type: string;

    @Column()
    instructions: string

}    