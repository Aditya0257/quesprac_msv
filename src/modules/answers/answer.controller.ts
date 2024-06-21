import { Controller, Get, Param } from '@nestjs/common';
import { AnswersService } from './answer.service';

@Controller('answers')
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @Get('/attendee/:attendee_id/date/:submission_date')
  async getAnswersBySubmissionDateOfAttendee(
    @Param('attendee_id') attendee_id: string,
    @Param('submission_date') submissionDate: string,
  ) {
    return await this.answersService.getAnswersBySubmissionDateOfAttendee(
      attendee_id,
      submissionDate,
    );
  }

  @Get('attendee/:attendee_id')
  async getAnswersByAttendeeId(@Param('attendee_id') attendee_id: string) {
    return await this.answersService.getAnswersByAttendeeId(attendee_id);
  }

  @Get(':id/ost_evals')
  async getOtherStatEvalsByAnswerId(@Param('id') id: string) {
    return await this.answersService.getOstEvalsByAnswerId(id);
  }

  @Get(':id/subtopic_evals')
  async getSubtopicEvalsByAnswerId(@Param('id') id: string) {
    return await this.answersService.getSubtopicEvalsByAnswerId(id);
  }

  @Get(':id')
  async getAnswerById(@Param('id') id: string) {
    return await this.answersService.getAnswerById(id);
  }
}
