import { Controller, Get, Param } from '@nestjs/common';
import { AttendeesService } from './attendee.service';
import { AnswersService } from '../answers/answer.service';

@Controller('attendees')
export class AttendeesController {
  constructor(
    private readonly attendeesService: AttendeesService,
    private readonly answerService: AnswersService,
  ) {}

  @Get(':id')
  async getAttendeeById(@Param('id') id: string) {
    return await this.attendeesService.getAttendeeById(id);
  }

  @Get(':id/latest_ans')
  async getLatestAnsByAttendeeId(@Param('id') id: string) {
    const attendee = await this.attendeesService.getAttendeeById(id);
    if (!attendee || !attendee.latest_ans_id) {
      throw new Error('Attendee or latest answer not found');
    }
    return await this.answerService.getAnswerById(
      attendee.latest_ans_id,
      false,
    );
  }

  @Get(':id/latest_ans/details')
  async getLatestAnsWithDetailsByAttendeeId(@Param('id') id: string) {
    const attendee = await this.attendeesService.getAttendeeById(id);
    if (!attendee || !attendee.latest_ans_id) {
      throw new Error('Attendee or latest answer not found');
    }
    return await this.answerService.getAnswerById(attendee.latest_ans_id, true);
  }
  //    ADMIN SIDE APIs, NOT USER SIDE

  //   @Get('/question/:ques_id/user/user_id')
  //   async getAttendeeByUserAndQuestion(
  //     @Param('ques_id') ques_id: string,
  //     @Param('user_id') user_id: string,
  //   ) {
  //     console.log(ques_id, user_id);
  //   }

  //   @Get('question/:ques_id')
  //   async getAttendeesByQuesId(@Param('ques_id') ques_id: string) {
  //     return await this.attendeesService.getAttendeesByQuesId(ques_id);
  //   }

  //   @Get('question/number/:ques_no')
  //   async getAttendeesByQuesNo(@Param('ques_no') ques_no: string) {
  //     return await this.attendeesService.getAttendeesByQuesNo(ques_no);
  //   }
}
