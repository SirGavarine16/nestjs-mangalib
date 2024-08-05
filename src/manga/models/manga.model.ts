import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Manga extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  shortDescription: string;

  @Prop()
  description: string;

  @Prop({ type: Number, required: true })
  year: number;
}

export const MangaSchema = SchemaFactory.createForClass(Manga);
