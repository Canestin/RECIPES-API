import { Controller, Get, Put, Delete, Post, Param, Body } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientDto } from '../dtos/Ingredient.dto';



@Controller('ingredients')

export class IngredientsController {

    constructor( private readonly ingredientsService: IngredientsService ) {}

    @Get('/in')
    getAllIngredients() {
        return this.ingredientsService.getAllIngredients();

    }
   
    // GET ONE /ingredients/:ingredientId
    @Get(':ingredientId')
    getIngredientById(@Param('ingredientId') ingredientId: number) {
        if(ingredientId){
            return this.ingredientsService.getIngredientById(ingredientId); 
        } 
        throw new HttpException('Ingredient not found', HttpStatus.NOT_FOUND);
    }

    // POST /ingredients
   @Post()
    async createIngredient(@Body() ingredientDto: IngredientDto) {
       const ingredient = await this.ingredientsService.createIngredient(ingredientDto);
        if(!ingredient){
            throw new HttpException('ingredient not created', HttpStatus.NOT_MODIFIED);
        }
        return ingredient;
    }        

    // PUT /ingredients/:id
    @Put(':ingredientId')
    async updateIngredient(@Param('ingredientId') ingredientId: number, @Body() ingredientDto: IngredientDto) {
        const ingredient = await this.ingredientsService.updateIngredient(ingredientId, ingredientDto);
        if(!ingredient){
            throw new HttpException('ingredient not updated', HttpStatus.NOT_MODIFIED);
        }
        return ingredient;
    }

    // DELETE /ingredients/:id
    @Delete(':ingredientId')
    async deleteIngredient(@Param('ingredientId') ingredientId: number) {
        const ingredient = await this.ingredientsService.deleteIngredient(ingredientId);
        if(ingredient){
            return 'ingredient has been deleted';
        }
        throw new HttpException('ingredient not updated', HttpStatus.NOT_MODIFIED);
    }
}