import { Module } from '@nestjs/common';
import { RecipeModule } from './recipes/recipe.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientsModule } from './ingredients/ingredients.module';

@Module({
  imports: [RecipeModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'your-password',
    database: 'dbapi',
    entities: ['src/entities/*.ts'],
    synchronize: true,
    logging: true,
  }), IngredientsModule],
  controllers: [],
  providers: [],

})
export class AppModule {}
