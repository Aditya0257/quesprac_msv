import { Module } from '@nestjs/common';
import { OstService } from './otherstats.service';
import { OstController } from './otherstats.controller';

@Module({
  providers: [OstService],
  controllers: [OstController],
})
export class OstModule {}
