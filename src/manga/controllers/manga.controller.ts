import { Controller, Get, HttpCode } from '@nestjs/common';
import { MangaService } from '../services/manga.service';

@Controller('v1/manga')
export class MangaController {
  constructor(private mangaService: MangaService) {}

  @Get()
  @HttpCode(200)
  async getAllManga() {
    const manga = await this.mangaService.findAll();
    return {
      message: 'All Manga were fetched successfully!',
      manga,
    };
  }
}
