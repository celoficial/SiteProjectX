import { Component, Input, OnInit } from '@angular/core';

import { CardModel } from 'src/app/models/cardModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: CardModel = new CardModel();

  array: Array<string> = new Array<string>(5);
  fullStar = 0.0;
  halfStar = '';

  constructor() {}

  ngOnInit(): void {
    //intStar = ?
    //halfstar = (rating % 1).toFixed(2).substring(2)
    //TODO: Refact this shit
    // var number = this.card.rating.toString();

    var rating = this.card.rating;
    this.fullStar = Math.trunc(rating);
    this.halfStar = (rating % 1).toFixed(2).substring(1);

    // this.intStars = parseInt(number.split('.')[0]);
    // this.halfStar = parseInt(number.split('.')[1]);

    for (let index = 0; index < this.array.length; index++) {
      this.array[index] = 'star_border';
    }

    if (this.halfStar != '.00') {
      this.array[this.fullStar] = 'star_half';
    }

    for (let index = 0; index < this.fullStar; index++) {
      this.array[index] = 'star';
    }
  }

  getColor() {
    if (this.card.rating > 3.5) {
      return 'Good';
    } else {
      if (this.card.rating < 2.5) {
        return 'Bad';
      }
      return 'Neutral';
    }
  }

  toggle = true;
  status = 'Adicionar à Minha lista';
  //showDelay = new FormControl(500);

  AddItem() {
    this.toggle = !this.toggle;
    this.status = this.toggle
      ? 'Adicionar à Minha lista'
      : 'Remover da Minha lista';
  }
}
