import { AnimeModel } from './../../models/animeModel';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
  detalhe: AnimeModel = new AnimeModel();

  episodios: number = 0;
  temporadas: number = 0;

  constructor() {
    this.detalhe = {
      animeTitle: 'JoJos Bizarre Adventure ',
      description:
        'O pai de Jojo adotou um maluco chamado Dio com sindrome de superioridade e agora todas as suas gerações foram amaldiçoadas a lutar contra vampiros, assassinos, psicopatas etc em eventos bizarros e no minimo perturbadores MAS pelo menos agora todo mundo tem poderes pica. ',
      id: 'sdflkgjdflgkdfs;gksredtg;erdsty',
      imgUrl:
        'https://image.api.playstation.com/cdn/UP0700/CUSA04897_00/9KyMrO6GjTtcrj1lC0aBENsrJroVszez.png',
      rating: 2,
      lancamento: new Date('2009-04-01'),

      categoria: 'seinen',
      temporadas: [
        {
          id: 'asdasdasd',
          episodios: [
            {
              episodioTitle:
                'Overdrive Overdrive Overdrive Overdrive Overdrive',
              id: 'asdasdasd',
              num: 1,
              sinopse:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi debitis quasi repellendus? Nam assumenda laborum explicabo iste consectetur praesentium tempora officiis, ad molestiae voluptate esse? Amet sint accusantium enim. Molestias?',
              thumbUrl:
                'https://sucodemanga.com.br/wp-content/uploads/2016/07/jojo-bizarre-adventure-thumb.jpg',
            },
            {
              episodioTitle: 'Overdrive 2',
              id: 'asdasdasd',
              num: 2,
              sinopse: 'aaaaaaaaaaaaaaaaaa',
              thumbUrl:
                'https://sucodemanga.com.br/wp-content/uploads/2016/07/jojo-bizarre-adventure-thumb.jpg',
            },
            {
              episodioTitle: 'Overdrive 2',
              id: 'asdasdasd',
              num: 3,
              sinopse: 'aaaaaaaaaaaaaaaaaa',
              thumbUrl:
                'https://sucodemanga.com.br/wp-content/uploads/2016/07/jojo-bizarre-adventure-thumb.jpg',
            },
            {
              episodioTitle: 'Overdrive 2',
              id: 'asdasdasd',
              num: 4,
              sinopse: 'aaaaaaaaaaaaaaaaaa',
              thumbUrl:
                'https://sucodemanga.com.br/wp-content/uploads/2016/07/jojo-bizarre-adventure-thumb.jpg',
            },
            {
              episodioTitle: 'Overdrive 2',
              id: 'asdasdasd',
              num: 5,
              sinopse: 'aaaaaaaaaaaaaaaaaa',
              thumbUrl:
                'https://sucodemanga.com.br/wp-content/uploads/2016/07/jojo-bizarre-adventure-thumb.jpg',
            },
            {
              episodioTitle: 'Overdrive 2',
              id: 'asdasdasd',
              num: 6,
              sinopse: 'aaaaaaaaaaaaaaaaaa',
              thumbUrl:
                'https://sucodemanga.com.br/wp-content/uploads/2016/07/jojo-bizarre-adventure-thumb.jpg',
            },
            {
              episodioTitle: 'Overdrive 2',
              id: 'asdasdasd',
              num: 7,
              sinopse: 'aaaaaaaaaaaaaaaaaa',
              thumbUrl:
                'https://sucodemanga.com.br/wp-content/uploads/2016/07/jojo-bizarre-adventure-thumb.jpg',
            },
            {
              episodioTitle: 'Overdrive 2',
              id: 'asdasdasd',
              num: 8,
              sinopse: 'aaaaaaaaaaaaaaaaaa',
              thumbUrl:
                'https://sucodemanga.com.br/wp-content/uploads/2016/07/jojo-bizarre-adventure-thumb.jpg',
            },
          ],
        },
        {
          id: 'asdasdasd',
          episodios: [
            {
              episodioTitle: 'Overdrive',
              id: 'asdasdasd',
              num: 1,
              sinopse: 'sdfdsagdfsgdfshgfdhdgfh',
              thumbUrl:
                'https://sucodemanga.com.br/wp-content/uploads/2016/07/jojo-bizarre-adventure-thumb.jpg',
            },
            {
              episodioTitle: 'Overdrive 2',
              id: 'asdasdasd',
              num: 2,
              sinopse: 'aaaaaaaaaaaaaaaaaa',
              thumbUrl:
                'https://sucodemanga.com.br/wp-content/uploads/2016/07/jojo-bizarre-adventure-thumb.jpg',
            },
          ],
        },
      ],
      tags: [
        {
          id: 'asdasdasdasd',
          titulo: 'Seinen',
        },
        {
          id: 'fgfgfgffg',
          titulo: 'Comédia',
        },
        {
          id: 'bvbvbvb',
          titulo: 'Sobrenatural',
        },
      ],
      studios: [
        {
          id: 'gfdsgsdfg',
          nome: 'David Productions',
        },
      ],
    };
  }

  ngOnInit(): void {
    this.detalhe.temporadas.forEach((temporada) => {
      this.temporadas++;
      temporada.episodios.forEach((episodio) => {
        this.episodios++;
      });
    });
  }

  toggle = true;
  status = 'Adicionar à Minha lista';
  showDelay = new FormControl(500);

  AddItem() {
    this.toggle = !this.toggle;
    this.status = this.toggle
      ? 'Adicionar à Minha lista'
      : 'Remover da Minha lista';
  }

  getClass(id: string): string {
    switch (id) {
      case 'asdasdasdasd':
        return 'Seinen';
        break;

      case 'fgfgfgffg':
        return 'Comedia';
        break;

      case 'bvbvbvb':
        return 'Sobrenatural';
        break;

      default:
        return '';
        break;
    }
  }
}
