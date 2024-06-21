import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttendeesService {
  constructor(private prisma: PrismaService) {}

  async getAttendeeById(id: string) {
    const attendee = this.prisma.attendee.findUnique({
      where: {
        attendee_id: id,
      },
    });
    return attendee;
  }
}
