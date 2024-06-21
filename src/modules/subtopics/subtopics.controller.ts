import { Controller, Get, Param, Query } from '@nestjs/common';
import { SubtopicsService } from './subtopics.service';

@Controller('subtopics')
export class SubtopicsController {
  constructor(private readonly subtopicsService: SubtopicsService) {}

  @Get('/name/:name')
  async getSubtopicByName(@Param('name') name: string) {
    return await this.subtopicsService.getSubtopicByName(name);
  }

  @Get('/name/:name/details')
  async getSubtopicByNameWithDetails(@Param('name') name: string) {
    return await this.subtopicsService.getSubtopicByName(name, true);
  }

  @Get('search')
  async searchSubtopics(@Query('q') searchTerm: string) {
    return await this.subtopicsService.searchSubtopics(searchTerm);
  }
}
