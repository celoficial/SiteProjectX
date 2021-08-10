import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';

import { CardModel } from 'src/app/models/cardModel';

@Component({
  selector: 'app-minhalista',
  templateUrl: './minhalista.component.html',
  styleUrls: ['./minhalista.component.scss'],
})
export class MinhalistaComponent implements OnInit {
  pageEvent!: PageEvent;
  pageSize = 10;

  options = [{ order: 'Descendente' }, { order: 'Ascendente' }];
  listCards: Array<CardModel> = [
    {
      title: 'Título',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 1.5,
    },
    {
      title: 'A',
      id: 'sdfsdfsdf',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 3.5,
    },
    {
      title: 'B',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 4.5,
    },
    {
      title: 'Título3',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 1.5,
    },
    {
      title: 'Título4',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 2.5,
    },
    {
      title: 'Título4',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 2.5,
    },
    {
      title: 'Título4',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 2.5,
    },
    {
      title: 'Título4',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 2.5,
    },
    {
      title: 'Título4',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 2.5,
    },
    {
      title: 'Título4',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 2.5,
    },
    {
      title: 'Título4',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 2.5,
    },
    {
      title: 'Título4',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 2.5,
    },

    {
      title: 'Título5',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 3,
    },
    {
      title: 'Título5',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 1.5,
    },
    {
      title: 'Título5',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 1.5,
    },
  ];
  sortedData: CardModel[];

  constructor() {
    this.sortedData = this.listCards.slice();
  }
  sortData(sort: Sort) {
    const data = this.listCards.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title':
          return compare(a.title, b.title, isAsc);
        case 'rating':
          return compare(a.rating, b.rating, isAsc);
        default:
          return 0;
      }
    });
  }

  ngOnInit() {}
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);

}
