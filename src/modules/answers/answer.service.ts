import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnswersService {
  constructor(private prisma: PrismaService) {}

  async getAnswersByAttendeeId(attendee_id: string) {
    const pageNum = 1;
    const limitNum = 10;
    const skip = (pageNum - 1) * limitNum;

    const questions = await this.prisma.answer.findMany({
      where: {
        attendee_id: attendee_id,
      },
      skip,
      take: limitNum,
    });

    return questions;
  }

  async getAnswerById(id: string, includeBool: boolean = false) {
    const includeOptions = includeBool
      ? {
          subtopics_eval: true,
          otherStatEval: true,
        }
      : {};

    const answer = await this.prisma.answer.findUnique({
      where: { answer_id: id },
      include: includeOptions,
    });
    return answer;
  }

  async getAnswersBySubmissionDateOfAttendee(
    attendee_id: string,
    submissionDate: string,
  ) {
    const parsedDate = new Date(submissionDate);
    if (isNaN(parsedDate.getTime())) {
      throw new Error('Invalid date format');
    }

    console.log(parsedDate);
    const formattedDate = parsedDate.toISOString().split('T')[0];
    console.log(formattedDate);

    const pageNum = 1;
    const limitNum = 10;
    const skip = (pageNum - 1) * limitNum;

    const questions = await this.prisma.answer.findMany({
      where: {
        attendee_id: attendee_id,
        submission_date: new Date(formattedDate),
      },
      skip,
      take: limitNum,
    });

    return questions;
  }

  async getOstEvalsByAnswerId(id: string) {
    const pageNum = 1;
    const limitNum = 10;
    const skip = (pageNum - 1) * limitNum;

    const allOstEval = this.prisma.otherStatEval.findMany({
      where: {
        answer_id: id,
      },
      skip,
      take: limitNum,
    });

    return allOstEval;
  }

  async getSubtopicEvalsByAnswerId(id: string) {
    const pageNum = 1;
    const limitNum = 10;
    const skip = (pageNum - 1) * limitNum;

    const allSubtopicEval = this.prisma.subtopicEval.findMany({
      where: {
        answer_id: id,
      },
      skip,
      take: limitNum,
    });

    return allSubtopicEval;
  }
}
