import { Module } from '@nestjs/common';
import { AnswersService } from './answer.service';
import { AnswersController } from './answer.controller';

@Module({
  providers: [AnswersService],
  controllers: [AnswersController],
})
export class AnswerModule {}
