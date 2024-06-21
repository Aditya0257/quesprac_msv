import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubtopicsService {
  constructor(private prisma: PrismaService) {}

  async getSubtopicByName(name: string, includeQuestions: boolean = false) {
    const subtopic = this.prisma.questionSubtopic.findUnique({
      where: {
        subtopic_name: name,
      },
      include: {
        questions: includeQuestions,
      },
    });
    return subtopic;
  }
}
