import { AnimeModel } from './../../models/animemodel';
import { Component, OnInit } from '@angular/core';
import { EpisodioModel } from 'src/app/models/episodiomodel';
import { TemporadaModel } from 'src/app/models/temporadamodel';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {

  detalhe: AnimeModel = new AnimeModel();

  episodios: number = 0;
  temporadas: number = 0

  constructor() {
    this.detalhe = {
      animeTitle : "Jojo",
      description: "Foda pra caralho",
      id: "sdflkgjdflgkdfs;gksredtg;erdsty",
      imgUrl: "https://img.elo7.com.br/product/zoom/1EC7B91/big-poster-do-anime-jojo-s-bizarre-adventure-90x-0-cm-lo00-poster.jpg",
      rating: 2,
      lancamento: new Date("2009-01-01"),
      temporadas: [
        {
          id: "asdasdasd",
          episodios: [
            {
              episodioTitle: "Overdrive",
              id: "asdasdasd",
              num: 1,
              sinopse: "sdfdsagdfsgdfshgfdhdgfhadasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasd",
              thumbUrl: "https://animetree.files.wordpress.com/2015/01/jjba-stardust-crusaders-5-cigarettes.jpg?w=1038&h=576&crop=1"
            },
            {
              episodioTitle: "Overdrive 2",
              id: "asdasdasd",
              num: 1,
              sinopse: "aaaaaaaaaaaaaaaaaa",
              thumbUrl: "https://animetree.files.wordpress.com/2015/01/jjba-stardust-crusaders-5-cigarettes.jpg?w=1038&h=576&crop=1"
            },
            {
              episodioTitle: "Overdrive 2",
              id: "asdasdasd",
              num: 1,
              sinopse: "aaaaaaaaaaaaaaaaaa",
              thumbUrl: "https://animetree.files.wordpress.com/2015/01/jjba-stardust-crusaders-5-cigarettes.jpg?w=1038&h=576&crop=1"
            },
            {
              episodioTitle: "Overdrive 2",
              id: "asdasdasd",
              num: 1,
              sinopse: "aaaaaaaaaaaaaaaaaa",
              thumbUrl: "https://animetree.files.wordpress.com/2015/01/jjba-stardust-crusaders-5-cigarettes.jpg?w=1038&h=576&crop=1"
            },
            {
              episodioTitle: "Overdrive 2",
              id: "asdasdasd",
              num: 1,
              sinopse: "aaaaaaaaaaaaaaaaaa",
              thumbUrl: "https://animetree.files.wordpress.com/2015/01/jjba-stardust-crusaders-5-cigarettes.jpg?w=1038&h=576&crop=1"
            },
            {
              episodioTitle: "Overdrive 2",
              id: "asdasdasd",
              num: 1,
              sinopse: "aaaaaaaaaaaaaaaaaa",
              thumbUrl: "https://animetree.files.wordpress.com/2015/01/jjba-stardust-crusaders-5-cigarettes.jpg?w=1038&h=576&crop=1"
            },
            {
              episodioTitle: "Overdrive 2",
              id: "asdasdasd",
              num: 1,
              sinopse: "aaaaaaaaaaaaaaaaaa",
              thumbUrl: "https://animetree.files.wordpress.com/2015/01/jjba-stardust-crusaders-5-cigarettes.jpg?w=1038&h=576&crop=1"
            },
            {
              episodioTitle: "Overdrive 2",
              id: "asdasdasd",
              num: 1,
              sinopse: "aaaaaaaaaaaaaaaaaa",
              thumbUrl: "https://animetree.files.wordpress.com/2015/01/jjba-stardust-crusaders-5-cigarettes.jpg?w=1038&h=576&crop=1"
            }
          ]
        },
        {
          id: "asdasdasd",
          episodios: [
            {
              episodioTitle: "Overdrive",
              id: "asdasdasd",
              num: 1,
              sinopse: "sdfdsagdfsgdfshgfdhdgfh",
              thumbUrl: "https://animetree.files.wordpress.com/2015/01/jjba-stardust-crusaders-5-cigarettes.jpg?w=1038&h=576&crop=1"
            },
            {
              episodioTitle: "Overdrive 2",
              id: "asdasdasd",
              num: 1,
              sinopse: "aaaaaaaaaaaaaaaaaa",
              thumbUrl: "https://animetree.files.wordpress.com/2015/01/jjba-stardust-crusaders-5-cigarettes.jpg?w=1038&h=576&crop=1"
            }
          ]
        }

      ],
      tags: [
        {
          id: "asdasdasdasd",
          titulo: "Seinen"
        },
        {
          id: "asdasdasdasd",
          titulo: "Comédia"
        },
        {
          id: "asdasdasdasd",
          titulo: "Escolar"
        },
      ],
      studios: [
        {
          id: "gfdsgsdfg",
          nome: "David Productions"
        }
      ]
    }
  }

  ngOnInit(): void {
    this.detalhe.temporadas.forEach(temporada => {
      this.temporadas++;
      temporada.episodios.forEach(episodio => {
        this.episodios ++;
      });
    });
  }
}
