import { StudioModel } from './studioModel';
import { TagModel } from './tagModel';
import { TemporadaModel } from "./temporadamodel";

export class AnimeModel {
  id: string = '';
  animeTitle: string = '';
  description: string = '';
  rating: number = 0;
  imgUrl: string = '';
  temporadas: Array<TemporadaModel> = new Array<TemporadaModel>();
  tags?: Array<TagModel> = new Array<TagModel>();
  studios?: Array<StudioModel> = new Array<StudioModel>();
  lancamento: Date = new Date();
}
