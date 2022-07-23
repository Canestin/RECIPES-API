import { Controller, Get, Put, Delete, Post, Param, Body } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { RecipeDto } from '../dtos/recipe.dto';

@Controller('recipes')
export class RecipeController {


    constructor(   private readonly recipeService: RecipeService ) {}


     // RECIPES


    // GET ALL /Recipes
    @Get()
    getAllRecipes() {
        return this.recipeService.getAllRecipes();

    }
   
    // GET ONE /recipes/:recipeId
    @Get(':recipeId')
    getRecipeById(@Param('recipeId') recipeId: number) {
        if(recipeId){
            return this.recipeService.getRecipeById(recipeId); 
        } 
        throw new HttpException('Recipe not found', HttpStatus.NOT_FOUND);
    }

    // POST /recipes
   @Post()
    async createRecipe(@Body() recipeDto: RecipeDto) {
       const recipe = await this.recipeService.createRecipe(recipeDto);
        if(!recipe){
            throw new HttpException('Recipe not created', HttpStatus.NOT_MODIFIED);
        }
        return recipe;
    }

    // PUT /recipes/:id
    @Put(':recipeId')
    async updateRecipe(@Param('recipeId') recipeId: number, @Body() recipeDto: RecipeDto) {
        const recipe = await this.recipeService.updateRecipe(recipeId, recipeDto);
        if(!recipe){
            throw new HttpException('Recipe not updated', HttpStatus.NOT_MODIFIED);
        }
        return recipe;
    }

    // DELETE /recipes/:id
    @Delete(':recipeId')
    async deleteRecipe(@Param('recipeId') recipeId: number) {
        const recipe = await this.recipeService.deleteRecipe(recipeId);
        if(!recipe){
            throw new HttpException('Recipe not updated', HttpStatus.NOT_MODIFIED);
        }
        return 'Recipe has been deleted';
    }

}