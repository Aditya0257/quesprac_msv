import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { AttendeeModule } from './modules/attendees/attendee.module';
import { AnswerModule } from './modules/answers/answer.module';
import { SubtopicsModule } from './modules/subtopics/subtopics.module';
import { CategoryModule } from './modules/category/category.module';
import { OstModule } from './modules/otherstats/otherstat.module';

@Module({
  imports: [
    QuestionsModule,
    PrismaModule,
    AttendeeModule,
    AnswerModule,
    SubtopicsModule,
    CategoryModule,
    OstModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
