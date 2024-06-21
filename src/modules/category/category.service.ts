import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getCategoryByName(name: string, includeQuestions: boolean = false) {
    const includeOptions = includeQuestions
      ? {
          questions: true,
        }
      : {};

    const category = this.prisma.category.findUnique({
      where: {
        category_name: name,
      },
      include: includeOptions,
    });
    return category;
  }

  async getSubtopicsByCategoryName(name: string) {
    const subtopics = this.prisma.questionSubtopic.findMany({
      where: {
        category: {
          category_name: name,
        },
      },
      select: {
        subtopic_id: true,
        subtopic_name: true,
      },
    });

    return subtopics;
  }
}
