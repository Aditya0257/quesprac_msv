import { Module } from '@nestjs/common';
import { AttendeesService } from './attendee.service';
import { AttendeesController } from './attendee.controller';

@Module({
  providers: [AttendeesService],
  controllers: [AttendeesController],
})
export class AttendeeModule {}
