import { Controller, Get, Query } from '@nestjs/common';
import { OstService } from './otherstats.service';

@Controller('ost')
export class OstController {
  constructor(private readonly ostService: OstService) {}

  @Get('search')
  // GET /ost/search?q=searchTerm
  async searchOst(@Query('q') searchTerm: string) {
    return await this.ostService.searchOst(searchTerm);
  }
}
