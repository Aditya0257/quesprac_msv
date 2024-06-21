import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuestionsService {
  constructor(private prisma: PrismaService) {}

  async getQuestions(filters: any) {
    const { category, subtopics, level, acceptance_rate, page, limit } =
      filters;
    const where: Prisma.QuestionWhereInput = {};

    if (category) {
      where.category = {
        category_name: category,
      };
    }

    if (subtopics) {
      const subtopicsArr = subtopics.split(',');
      // console.log(subtopicsArr);
      where.subtopics = {
        some: {
          subtopic_name: {
            in: subtopicsArr,
          },
        },
      };
    }

    if (level) {
      where.level = level;
    }

    if (acceptance_rate) {
      where.avg_acceptance_rate = {
        gte: parseFloat(acceptance_rate),
      };
    }

    const pageNum = parseInt(page, 10) || 1;
    const limitNum = parseInt(limit, 10) || 10;
    const skip = (pageNum - 1) * limitNum;

    const questions = await this.prisma.question.findMany({
      where,
      skip,
      take: limitNum,
      include: {
        // category: true,
        // subtopics: true,
      },
    });

    return questions;
  }

  async getQuestionsWithDetails(filters: any) {
    const { category, subtopics, level, acceptance_rate, page, limit } =
      filters;
    const where: Prisma.QuestionWhereInput = {};

    if (category) {
      where.category = {
        category_name: category,
      };
    }

    if (subtopics) {
      const subtopicsArr = subtopics.split(',');
      // console.log(subtopicsArr);
      where.subtopics = {
        some: {
          subtopic_name: {
            in: subtopicsArr,
          },
        },
      };
    }

    if (level) {
      where.level = level;
    }

    if (acceptance_rate) {
      where.avg_acceptance_rate = {
        gte: parseFloat(acceptance_rate),
      };
    }

    const pageNum = parseInt(page, 10) || 1;
    const limitNum = parseInt(limit, 10) || 10;
    const skip = (pageNum - 1) * limitNum;

    const questions = await this.prisma.question.findMany({
      where,
      skip,
      take: limitNum,
      include: {
        category: true,
        subtopics: true,
        otherStats: true,
        extra_questions: true,
      },
    });

    return questions;
  }

  async getOtherStatsByQuestionId(id: string) {
    return this.prisma.question.findUnique({
      where: {
        ques_id: id,
      },
      include: {
        otherStats: true,
      },
    });
  }

  async getExtraQuestionsByQuestionId(id: string) {
    return this.prisma.question.findUnique({
      where: {
        ques_id: id,
      },
      include: {
        extra_questions: true,
      },
    });
  }

  async getQuestionById(id: string) {
    const question = await this.prisma.question.findUnique({
      where: {
        ques_id: id,
      },
    });

    return question;
  }

  async getQuestionByIdWithDetails(id: string) {
    const question = await this.prisma.question.findUnique({
      where: {
        ques_id: id,
      },
      include: {
        category: true,
        subtopics: true,
        otherStats: true,
        extra_questions: true,
      },
    });

    return question;
  }

  async getQuestionByNumber(number: string) {
    const question = await this.prisma.question.findUnique({
      where: {
        ques_no: parseInt(number, 10),
      },
    });

    return question;
  }

  async getQuestionByNumberWithDetails(number: string) {
    const question = await this.prisma.question.findUnique({
      where: {
        ques_no: parseInt(number, 10),
      },
      include: {
        category: true,
        subtopics: true,
        otherStats: true,
        extra_questions: true,
      },
    });

    return question;
  }

  async getQuestionsByCategory(category: string) {
    const where: Prisma.QuestionWhereInput = {};

    where.category = {
      category_name: category,
    };

    const pageNum = 1;
    const limitNum = 10;
    const skip = (pageNum - 1) * limitNum;

    const questions = await this.prisma.question.findMany({
      where,
      skip,
      take: limitNum,
      include: {
        // category: true,
      },
    });

    return questions;
  }

  async getQuestionsByCategoryWithDetails(category: string) {
    const where: Prisma.QuestionWhereInput = {};

    where.category = {
      category_name: category,
    };

    const pageNum = 1;
    const limitNum = 10;
    const skip = (pageNum - 1) * limitNum;

    const questions = await this.prisma.question.findMany({
      where,
      skip,
      take: limitNum,
      include: {
        category: true,
        subtopics: true,
      },
    });

    return questions;
  }

  async getQuestionsByLevel(level: string) {
    const where: Prisma.QuestionWhereInput = {};

    where.level = level;

    const pageNum = 1;
    const limitNum = 10;
    const skip = (pageNum - 1) * limitNum;

    const questions = await this.prisma.question.findMany({
      where,
      skip,
      take: limitNum,
    });

    return questions;
  }

  async getQuestionsByLevelWithDetails(level: string) {
    const where: Prisma.QuestionWhereInput = {};

    where.level = level;

    const pageNum = 1;
    const limitNum = 10;
    const skip = (pageNum - 1) * limitNum;

    const questions = await this.prisma.question.findMany({
      where,
      include: {
        category: true,
        subtopics: true,
      },
      skip,
      take: limitNum,
    });

    return questions;
  }

  async getQuestionsByAcceptanceRate(acceptance_rate: string) {
    const where: Prisma.QuestionWhereInput = {};

    where.avg_acceptance_rate = {
      gte: parseFloat(acceptance_rate),
    };

    const pageNum = 1;
    const limitNum = 10;
    const skip = (pageNum - 1) * limitNum;

    const questions = await this.prisma.question.findMany({
      where,
      skip,
      take: limitNum,
    });

    return questions;
  }

  async getQuestionsByAcceptanceRateWithDetails(acceptance_rate: string) {
    const where: Prisma.QuestionWhereInput = {};

    where.avg_acceptance_rate = {
      gte: parseFloat(acceptance_rate),
    };

    const pageNum = 1;
    const limitNum = 10;
    const skip = (pageNum - 1) * limitNum;

    const questions = await this.prisma.question.findMany({
      where,
      include: {
        category: true,
        subtopics: true,
      },
      skip,
      take: limitNum,
    });

    return questions;
  }

  async getQuestionsBySubtopics(subtopics: string) {
    const where: Prisma.QuestionWhereInput = {};

    const subtopicsArr = subtopics.split(',');
    where.subtopics = {
      some: {
        subtopic_name: {
          in: subtopicsArr,
        },
      },
    };

    const pageNum = 1;
    const limitNum = 10;
    const skip = (pageNum - 1) * limitNum;

    const questions = await this.prisma.question.findMany({
      where,
      skip,
      take: limitNum,
      include: {
        // subtopics: true,
      },
    });

    return questions;
  }

  async getQuestionsBySubtopicsWithDetails(subtopics: string) {
    const where: Prisma.QuestionWhereInput = {};

    const subtopicsArr = subtopics.split(',');
    where.subtopics = {
      some: {
        subtopic_name: {
          in: subtopicsArr,
        },
      },
    };

    const pageNum = 1;
    const limitNum = 10;
    const skip = (pageNum - 1) * limitNum;

    const questions = await this.prisma.question.findMany({
      where,
      skip,
      take: limitNum,
      include: {
        category: true,
        subtopics: true,
      },
    });

    return questions;
  }
}
