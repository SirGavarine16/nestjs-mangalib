import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Manga } from '../models/manga.model';
import { Model } from 'mongoose';

@Injectable()
export class MangaService {
  constructor(@InjectModel(Manga.name) private mangaModel: Model<Manga>) {}

  findAll() {
    return this.mangaModel.find().exec();
  }
}
