import { Module } from '@nestjs/common';
import { IngredientsController } from './ingredients.controller';
import { IngredientsService } from './ingredients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientEntity } from '../entities/ingredient.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([IngredientEntity]),
  ],
  controllers: [IngredientsController],
  providers: [IngredientsService]
})
export class IngredientsModule {}
