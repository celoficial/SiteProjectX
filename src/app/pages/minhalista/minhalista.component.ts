import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/cardModel';

@Component({
  selector: 'app-minhalista',
  templateUrl: './minhalista.component.html',
  styleUrls: ['./minhalista.component.scss'],
})
export class MinhalistaComponent implements OnInit {

   listCards: Array<CardModel> = [
    {
      title: "Título",
      id: "hahaha",
      thumburl: "https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg",
      rating: 1.5,
    },
    {
      title: "Título1",
      id: "sdfsdfsdf",
      thumburl: "https://alternativanerd.com.br/wp-content/uploads/2020/03/Kaguya1.jpg",
      rating: 3.5,
    },
  ]
  constructor() {}

  ngOnInit(): void {}
}
