import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('/name/:name')
  async getCategoryByName(@Param('name') name: string) {
    return await this.categoryService.getCategoryByName(name);
  }

  @Get('/name/:name/details')
  async getCategoryByNameWithDetails(@Param('name') name: string) {
    return await this.categoryService.getCategoryByName(name, true);
  }

  @Get('/name/:name/subtopics')
  async getSubtopicsByCategoryName(@Param('name') name: string) {
    return await this.categoryService.getSubtopicsByCategoryName(name);
  }
}
