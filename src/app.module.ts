import { Module } from '@nestjs/common';
import { RecipeModule } from './recipes/recipe.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientsModule } from './ingredients/ingredients.module';

@Module({
  imports: [RecipeModule, IngredientsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Canestin',
    database: 'dbapi',
    entities: ['src/entities/*.ts'],
    synchronize: true,
    logging: true,
  })],
  controllers: [],
  providers: [],

})
export class AppModule {}
