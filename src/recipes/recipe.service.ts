import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RecipeEntity } from '../entities/recipe.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RecipeDto } from '../dtos/recipe.dto';

@Injectable()
export class RecipeService {

    constructor(
        @InjectRepository(RecipeEntity)
        private readonly recipeRepository: Repository<RecipeEntity>,
        
    ) {}

    // Le résultat est un tableau renvoyé par la base de donnée
    getAllRecipes() {
        return this.recipeRepository.find();
    }

    async getRecipeById(recipeId: number) {

        const recipe = await this.recipeRepository.findOneBy({ id : recipeId });
        return recipe;
    }

    async createRecipe(recipeDto: RecipeDto) {
        const recipe = await this.recipeRepository.save(recipeDto);
        return recipe;
    }

    async updateRecipe(recipeId, recipeDto: RecipeDto) {
        const recipe = await this.recipeRepository.findOneBy({ id : recipeId });
        if(!recipe){
            return null;
        }
        await this.recipeRepository.update(recipeId, recipeDto);
        return this.recipeRepository.findOneBy({ id : recipeId });
    }

    async deleteRecipe(recipeId) {
        const recipe = await this.recipeRepository.findOneBy({ id : recipeId });
        if(!recipe){
            return null;
        }
        await this.recipeRepository.delete(recipeId);
        return recipe;
    }
   
}