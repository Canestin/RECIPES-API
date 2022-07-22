
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IngredientEntity } from 'src/entities/ingredient.entity';
import { IngredientDto } from 'src/dtos/Ingredient.dto';


@Injectable()
export class IngredientsService {

    constructor(
        @InjectRepository(IngredientEntity)
        private readonly ingredientRepository: Repository<IngredientEntity>,
        
    ) {}


    getAllIngredients() {
        return this.ingredientRepository.find();
    }

    async getIngredientById(ingredientId: number) {

        const ingredient = await this.ingredientRepository.findOneBy({ id : ingredientId });
        return ingredient;
    }
    

    async createIngredient(ingredientDto: IngredientDto) {
        const ingredient = await this.ingredientRepository.save(ingredientDto);
        if(!ingredient){
            return null;
        }
        return ingredient;
    }

    async updateIngredient(ingredientId, ingredientDto: IngredientDto) {
        const ingredient = await this.ingredientRepository.findOneBy({ id : ingredientId });
        if(!ingredient){
            return null;
        }
        await this.ingredientRepository.update(ingredientId, ingredientDto);
        return this.ingredientRepository.findOneBy({ id : ingredientId });
    }

    async deleteIngredient(ingredientId) {
        const ingredient = await this.ingredientRepository.findOneBy({ id : ingredientId });
        if(!ingredient){
            return null;
        }
        await this.ingredientRepository.delete(ingredientId);
        return ingredient;
    }


    //  NOT FINISHED

    async addIngredientToRecipe(recipeId: number, ingredientId: number) {
        const recipe = await this.ingredientRepository.findOneBy({id : ingredientId });
        const ingredient = this.ingredientRepository.findOneBy({ id : ingredientId });
        if(!recipe || !ingredient){
            return null;
        }
        return this.ingredientRepository.save(recipe);
    }

   
}
