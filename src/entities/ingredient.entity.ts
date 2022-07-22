import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";

@Entity('recipes')
export class IngredientEntity {

    @PrimaryGeneratedColumn( {name: "recipeId"} )
    id: number

    @Column()
    name: string

    @Column()
    aisle: string;

    @ManyToMany(type => IngredientEntity)
    recipes: IngredientEntity[];

}    