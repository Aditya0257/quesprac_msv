import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OstService {
  constructor(private prisma: PrismaService) {}

  async searchOst(searchTerm: string) {
    return this.prisma.otherStat.findMany({
      where: {
        ost_name: { contains: searchTerm, mode: 'insensitive' },
      },
    });
  }
}
