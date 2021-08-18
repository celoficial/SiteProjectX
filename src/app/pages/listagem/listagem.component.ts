import { CardModel } from '../../models/cardModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  listCards: Array<CardModel> = [
    {
      title: 'Título',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 1.5,
    },
    {
      title: 'Título1',
      id: 'sdfsdfsdf',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 3.5,
    },
    {
      title: 'Título2',
      id: 'hfghfgh',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 5,
    },
    {
      title: 'Título',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 4,
    },
    {
      title: 'Título',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 3.8,
    },
    {
      title: 'Título',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 2.4,
    },
    {
      title: 'Título',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 2.5,
    },
    {
      title: 'Título',
      id: 'hahaha',
      thumburl:
        'https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg',
      rating: 2.5,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
