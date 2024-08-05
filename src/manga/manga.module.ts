import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MangaController } from './controllers/manga.controller';
import { MangaService } from './services/manga.service';
import { Manga, MangaSchema } from './models/manga.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Manga.name, schema: MangaSchema }]),
  ],
  controllers: [MangaController],
  providers: [MangaService],
})
export class MangaModule {}
