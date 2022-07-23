import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { IngredientEntity } from "./ingredient.entity";

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

    @ManyToMany(type => IngredientEntity)
    recipesList: IngredientEntity[];

}    