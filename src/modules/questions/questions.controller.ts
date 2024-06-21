import { Controller, Get, Param, Query } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionService: QuestionsService) {}

  @Get()
  // GET /questions?subtopics=asyncawait,callback,promises&level=medium&acceptance_rate=80&category=javascript&page=1&limit=10
  async getQuestions(@Query() filters: any): Promise<Array<object>> {
    return await this.questionService.getQuestions(filters);
  }

  @Get('/details')
  // GET /questions/details?subtopics=asyncawait,callback,promises&level=medium&acceptance_rate=80&category=javascript&page=1&limit=10
  async getQuestionsWithDetails(@Query() filters: any) {
    return await this.questionService.getQuestionsWithDetails(filters);
  }

  @Get('/subtopics')
  async getQuestionsBySubtopics(
    @Query('subtopics') subtopics: string,
  ): Promise<Array<object>> {
    // GET /questions?subtopics=stp1,stp2 -> string
    return await this.questionService.getQuestionsBySubtopics(subtopics);
  }

  @Get('/subtopics/details')
  async getQuestionsBySubtopicsWithDetails(
    @Query('subtopics') subtopics: string,
  ): Promise<Array<object>> {
    // GET /questions?subtopics=stp1,stp2 -> string
    return await this.questionService.getQuestionsBySubtopicsWithDetails(
      subtopics,
    );
  }

  @Get(':id/ost')
  async getOtherStatsByQuestionId(@Param('id') id: string) {
    return await this.questionService.getOtherStatsByQuestionId(id);
  }

  @Get(':id/extra_ques')
  async getExtraQuestionsByQuestionId(@Param('id') id: string) {
    return await this.questionService.getExtraQuestionsByQuestionId(id);
  }

  @Get(':id')
  async getQuestionById(@Param('id') id: string) {
    return await this.questionService.getQuestionById(id);
  }

  @Get(':id/details')
  async getQuestionByIdWithDetails(@Param('id') id: string) {
    return await this.questionService.getQuestionByIdWithDetails(id);
  }

  @Get('number/:number')
  async getQuestionByNumber(@Param('number') number: string) {
    return await this.questionService.getQuestionByNumber(number);
  }

  @Get('number/:number/details')
  async getQuestionByNumberWithDetails(@Param('number') number: string) {
    return await this.questionService.getQuestionByNumberWithDetails(number);
  }

  @Get('category/:category')
  async getQuestionsByCategory(@Param('category') category: string) {
    return await this.questionService.getQuestionsByCategory(category);
  }

  @Get('category/:category/details')
  async getQuestionsByCategoryWithDetails(@Param('category') category: string) {
    return await this.questionService.getQuestionsByCategoryWithDetails(
      category,
    );
  }

  @Get('level/:level')
  async getQuestionsByLevel(@Param('level') level: string) {
    return await this.questionService.getQuestionsByLevel(level);
  }

  @Get('level/:level/details')
  async getQuestionsByLevelWithDetails(@Param('level') level: string) {
    return await this.questionService.getQuestionsByLevelWithDetails(level);
  }

  @Get('acceptance_rate/:acceptance_rate')
  async getQuestionsByAcceptanceRate(
    @Param('acceptance_rate') acceptance_rate: string,
  ) {
    return await this.questionService.getQuestionsByAcceptanceRate(
      acceptance_rate,
    );
  }

  @Get('acceptance_rate/:acceptance_rate/details')
  async getQuestionsByAcceptanceRateWithDetails(
    @Param('acceptance_rate') acceptance_rate: string,
  ) {
    return await this.questionService.getQuestionsByAcceptanceRateWithDetails(
      acceptance_rate,
    );
  }
}
